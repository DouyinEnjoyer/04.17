import { PlayArea } from "./playArea.js";

class ResultArea extends PlayArea
{
    /**
     * @param {{question: string, selected: boolean, rightAnswer: boolean}[]} resultArray
     */
    constructor(manager, resultArray)
    {
        super(manager)
        this.#render(resultArray)
    }

    /**
     * @param {{question: string, selected: boolean, rightAnswer: boolean}[]} resultArray
     */
    #render(resultArray)
    {
        const list = document.createElement("div")
        list.className = "result-list"
        let correctCount = 0

        resultArray.forEach((item) =>
        {
            const line = document.createElement("p")
            const isCorrect = item.selected === item.rightAnswer
            const rightText = item.rightAnswer ? "Igaz" : "Hamis"

            if (isCorrect)
            {
                correctCount++
                line.className = "green-bg"
            }
            else
            {
                line.className = "red-bg"
            }

            line.textContent = isCorrect
                ? `${item.question} Helyes válasz ${rightText}`
                : `${item.question} Helytelen válasz ${rightText}`
            list.appendChild(line)
        })

        const summary = document.createElement("h3")
        summary.className = "summary"
        summary.textContent = `${resultArray.length}/${correctCount} helyes`

        const restartButton = document.createElement("button")
        restartButton.className = "restart-button"
        restartButton.textContent = "újra"
        restartButton.addEventListener("click", () =>
        {
            this.manager.play()
        })

        this.div.appendChild(list)
        this.div.appendChild(summary)
        this.div.appendChild(restartButton)
    }
}

export { ResultArea }
