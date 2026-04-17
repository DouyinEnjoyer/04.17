/**
 * @typedef {{question: string, answer1: string, answer2: string, answer3: string, answer4: string, rightAnswer: string}} QuestionType
 * @typedef {{id: string, label: string, name: string}} FormFieldType
 * @typedef {{question: string, answer: string}} TrueFalseQuestionType
 */

/**
 * 
 * @param {{id?: string, parent?: HTMLElement, classList?: string[]}} options 
 * @returns {HTMLDivElement}
 */
const createDiv = (options = undefined) => {
    const div = document.createElement("div")

    if (options)
    {
        const { id, parent, classList } = options

        if (id)
        {
            div.id = id
        }

        if (parent)
        {
            parent.appendChild(div)
        }

        if (classList)
        {
            classList.forEach((cssClass) =>
            {
                div.classList.add(cssClass)
            })
        }
    }

    return div
}

/**
 * 
 * @param {{id?: string, parent: HTMLElement, classList?: string[], label: string}} options 
 * @returns {HTMLButtonElement}
 */
const createButton = (options) => {
    const { id, parent, classList, label } = options
    const button = document.createElement("button")
    button.innerText = label

    if (id)
    {
        button.id = id
    }

    if (classList)
    {
        classList.forEach((cssClass) =>
        {
            button.classList.add(cssClass)
        })
    }

    parent.appendChild(button)
    return button
}

/**
 * 
 * @param {string[]} headerContentList 
 * @param {HTMLElement} parent 
 * @returns {HTMLTableSectionElement}
 */
const createTable = (headerContentList, parent)=> {
    const table = document.createElement("table")
    parent.appendChild(table)

    const thead = document.createElement("thead")
    table.appendChild(thead)

    const tr = document.createElement("tr")
    thead.appendChild(tr)

    headerContentList.forEach((headerContent) =>
    {
        const th = document.createElement("th")
        th.innerText = headerContent
        tr.appendChild(th)
    })

    const tbody = document.createElement("tbody")
    table.appendChild(tbody)

    return tbody
}

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {Array} list (mivel minden dolgozatnál más lesz a típusa a tömb elemeinek, ezért nem tudom megadni a típust) 
 */
const clearTbodyAndHandleEmptyList = (tbody, list) => {
    tbody.replaceChildren()

    if (list.length === 0)
    {
        const row = createRowForTbody(tbody)
        createTextTableCell("Üres Lista", row)
    }
}

/**
 * 
 * @param {HTMLTableSectionElement} tableSection 
 * @returns {HTMLTableRowElement}
 */
const createRowForTbody = (tableSection) => {
    const row = document.createElement("tr")
    tableSection.appendChild(row)
    return row
}

/**
 * 
 * @param {string} content 
 * @param {HTMLTableRowElement} parent 
 */
const createTextTableCell = (content, parent) => {
    const td = document.createElement("td")
    td.innerText = content
    parent.appendChild(td)
}

/**
 * 
 * @param {string} content 
 * @param {HTMLTableRowElement} parent 
 * @returns {HTMLButtonElement}
 */
const createEditTableCell = (parent) => {
    const td = document.createElement("td")
    const button = createButton({
        parent: td,
        label: "Szerkesztés"
    })
    parent.appendChild(td)
    return button
}

/**
 * @callback CreateFieldsCallback
 * @param {HTMLFormElement} form a form amihez hozzafuzzuk
 * @returns {void}
 * 
 * @callback SubmitEventListener
 * @param {Event} event submitesemeny
 * @returns {void}

 * 
 * @param {CreateFieldsCallback} createCallback 
 * @param {SubmitEventListener} eventlistener 
 * @param {{button: HTMLButtonElement, form: HTMLFormElement}}  
 */
const createForm = (createCallback, eventlistener) => {
    const form = document.createElement("form")
    createCallback(form)

    const button = document.createElement("button")
    button.innerText = "Küldés"
    button.type = "submit"
    form.appendChild(button)

    form.addEventListener("submit", eventlistener)

    return {
        button,
        form
    }
}

/**
 * 
 * @param {{id: string, name: string, labelContent: string, parent: HTMLElement}} param A parameterobjektum ami alapjan osszeallitja az inputot tartalmazo divet az errorral
 * @returns {{errorElement: HTMLElement, input: HTMLInputElement}} Az error html elem, es az input html elem
 */
const createInputField = ({id, name, labelContent, parent}) =>{
    const div = createDiv({ parent })

    const label = document.createElement("label")
    label.innerText = labelContent
    label.htmlFor = id
    div.appendChild(label)

    const input = document.createElement("input")
    div.appendChild(input)
    input.type = "text"
    input.id = id
    input.name = name

    const errorElement = createDiv({
        parent: div,
        classList: ["error"]
    })

    return {
        errorElement,
        input
    }
}

/**
 * 
 * @param {HTMLElement} parent 
 * @returns {HTMLInputElement}
 */
const createFileInput = (parent) => {
    const input = document.createElement("input")
    input.type = "file"
    parent.appendChild(input)
    return input
}

/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} content 
 */
const createSpan = (parent, content) => {
    const span = document.createElement("span")
    span.innerText = content
    parent.appendChild(span)
}

/**
 * 
 * @param {HTMLElement} element
 * @returns {void} 
 */
const show = (element) => {
    element.classList.remove("hidden")
}

/**
 * 
 * @param {HTMLElement} element 
 * @returns {void}
 */
const hide = (element) => {
    element.classList.add("hidden")
}

/**
 * 
 * @param {{id: string, label: string, name: string}} param0 
 * @returns {HTMLElement}
 */
const createRadioButton = ({id, label, name} ) => {
    const div = document.createElement("div")
    const input = document.createElement("input")
    input.name = name
    input.value = id
    input.id = id
    input.type = "radio"
    div.appendChild(input)

    const labelElement = document.createElement("label")
    labelElement.innerText = label
    labelElement.htmlFor = id
    div.appendChild(labelElement)

    return div
}


export {createDiv, createButton, createTable, clearTbodyAndHandleEmptyList, createTextTableCell, createRowForTbody, createForm, createInputField, createFileInput, createEditTableCell, createSpan, hide, show, createRadioButton}