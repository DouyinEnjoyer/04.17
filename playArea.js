import { ViewElement } from "./viewElement.js";

class PlayArea extends ViewElement
{
    get manager()
    {
        return this.#manager
    }
    get div()
    {
        return this.#div
    }
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * @type {SelectManager}
     */
    #manager
    constructor(manager)
    {
        super(manager)
        this.div = this.container
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    replaceContent(parent)
    {

    }

}