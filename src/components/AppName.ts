import { CreateComponent } from "../services/views/CreateComponent"
import { Component } from "./Component"

export class AppName extends Component {

    constructor(content: Data.BasicApplication, options: View.ComponentOptions = null, parent: HTMLElement) {
        super(content, options, parent)
        this.createElement()
    }

    private createElement() {
        this.element = this.parent.appendChild(document.createElement('div'))
        this.element.className = 'approw'
        CreateComponent.create(this.element, { tag: 'div', content: (this.content as Data.BasicApplication).apdex.toString() as string }, 'apdex')
        CreateComponent.create(this.element, { tag: 'div', content: (this.content as Data.BasicApplication).name })

        if (this.options && this.options.click) {
            this.element.addEventListener('click', this.options.click)
        }
    }
}