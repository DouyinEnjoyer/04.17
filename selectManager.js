class SelectManager
{
    /**
     * @type {NextQuestionCallback}
     */
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
        this.questionNumber = 0
        this.#questionAnswers = []

    }
    /**
     * @returns {void}
     */
    reset()
    {

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

    }
}