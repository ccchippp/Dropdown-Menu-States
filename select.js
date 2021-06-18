export default class Select {
    constructor(element) {
        this.element = element
        this.customElement = document.createElement('div')
        this.labelElement = document.createElement('span')
        this.optionsCustomElement = document.createElement('ul')
        setupCustomElement(this)
    }
}

function setupCustomElement(select) {
    select.customElement.classlist.add('custom-select-container')
    select.labelElement.classlist.add('custom-select-value')
    select.customElement.append(select.labelElement)
}