class ViewElement
{
    /**
     * @type {SelectManager}
     */
    #manager
    /**
     * @type {HTMLDivElement}
     */
    #container

    get manager()
    {
        return this.#manager
    }

    get container()
    {
        return this.#container
    }

    constructor(manager)
    {
        this.#manager = manager
        this.#container = document.createElement("div")
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent)
    {
        parent.appendChild(this.#container)
    }
}

export {ViewElement}