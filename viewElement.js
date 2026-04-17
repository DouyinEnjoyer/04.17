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