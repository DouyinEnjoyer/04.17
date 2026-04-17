import { ViewElement } from "./viewElement.js";

class PlayArea extends ViewElement
{
    get div()
    {
        return this.#div
    }
    /**
     * @type {HTMLDivElement}
     */
    #div

    constructor(manager)
    {
        super(manager)
        this.#div = this.container
        this.#div.className = "play-area"
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    replaceContent(parent)
    {
        parent.replaceChildren()
        this.appendTo(parent)
    }

}

export { PlayArea }