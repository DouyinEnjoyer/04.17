import { SelectManager } from "./selectManager.js";
import { CardArea } from "./cardArea.js";
import { ResultArea } from "./resultArea.js";

/**
 * @typedef {{question: string, valid: boolean}} QuestionType
 */

/**
 * @typedef {{question: string, selected: boolean, rightAnswer: boolean}} QuestionResultViewType
 */

const appRoot = document.getElementById("app")

if (!appRoot)
{
    throw new Error("Missing #app container")
}

const title = document.createElement("h1")
title.innerHTML = `<span class="title-true">Igaz</span> vagy <span class="title-false">Hamis</span>`
appRoot.appendChild(title)

const content = document.createElement("div")
appRoot.appendChild(content)

fetch("./data.json")
    .then((response) =>
    {
        if (!response.ok)
        {
            throw new Error("Failed to load data.json")
        }
        return response.json()
    })
    .then((data) =>
    {
        /** @type {QuestionType[]} */
        const questions = data.questions ?? []
        const manager = new SelectManager(questions)

        manager.nextQuestionCallback = (question) =>
        {
            const cardArea = new CardArea(manager, question)
            cardArea.replaceContent(content)
        }

        manager.finishCallback = (resultArray) =>
        {
            const resultArea = new ResultArea(manager, resultArray)
            resultArea.replaceContent(content)
        }

        manager.play()
    })
    .catch((error) =>
    {
        const errorText = document.createElement("p")
        errorText.className = "red-bg"
        errorText.textContent = `Hiba: ${error.message}`
        content.replaceChildren(errorText)
    })
