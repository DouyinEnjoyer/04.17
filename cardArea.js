import { PlayArea } from "./playArea.js";

class CardArea extends PlayArea
{
    /**
     * @param {{question: string, valid: boolean}} question
     */
    constructor(manager, question)
    {
        super(manager)
        this.#render(question)
    }

    /**
     * @param {{question: string, valid: boolean}} question
     */
    #render(question)
    {
        const trueButton = document.createElement("button")
        trueButton.className = "card-button card-true"
        trueButton.textContent = question.question
        trueButton.addEventListener("click", () =>
        {
            this.manager.nextQuestion(true)
        })

        const falseButton = document.createElement("button")
        falseButton.className = "card-button card-false"
        falseButton.textContent = question.question
        falseButton.addEventListener("click", () =>
        {
            this.manager.nextQuestion(false)
        })

        const buttonRow = document.createElement("div")
        buttonRow.className = "answer-buttons"
        buttonRow.appendChild(trueButton)
        buttonRow.appendChild(falseButton)

        this.div.appendChild(buttonRow)
    }
}

export { CardArea }
