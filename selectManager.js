class SelectManager
{
    /**
     * @type {NextQuestionCallback}
     */
    set nextQuestionCallback(value)
    {
        this.#nextQuestionCallback = value
    }

    set NextQuestionCallback(value)
    {
        this.#nextQuestionCallback = value
    }
    /**
     * @type {FinishCallback}
     */
    set finishCallback(value)
    {
        this.#finishCallback = value
    }
    /**
     * @type {number}
     */
    #questionNumber
    /**
     * @type {QuestionType[]}
     */
    #questions
    /**
     * @type {boolean[]}
     */
    #questionAnswers
    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback
    /**
     * @type {FinishCallback}
     */
    #finishCallback
    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions)
    {
        this.#questions = questions
        this.#questionNumber = 0
        this.#questionAnswers = []

    }
    /**
     * @returns {void}
     */
    play()
    {
        this.#questionNumber = 0
        this.#questionAnswers = []

        if (this.#questions.length === 0)
        {
            if (this.#finishCallback)
            {
                this.#finishCallback([])
            }
            return
        }

        if (this.#nextQuestionCallback)
        {
            this.#nextQuestionCallback(this.#questions[this.#questionNumber])
        }

    }
    /**
     * @returns {void}
     */
    reset()
    {
        this.play()
    }
    /**
     * 
     * @param {boolean} answer 
     * @returns {void}
     */
    nextQuestion(answer)
    {
        this.#questionAnswers.push(answer)
        this.#questionNumber++

        if (this.#questionNumber < this.#questions.length)
        {
            if (this.#nextQuestionCallback)
            {
                this.#nextQuestionCallback(this.#questions[this.#questionNumber])
            }
            return
        }

        const resultArray = this.#questions.map((question, index) =>
        {
            return {
                question: question.question,
                selected: this.#questionAnswers[index],
                rightAnswer: question.valid
            }
        })

        if (this.#finishCallback)
        {
            this.#finishCallback(resultArray)
        }

    }
}

export { SelectManager }