export class Component {
    element: HTMLElement
    content: (Data.Application | Data.BasicApplication | Data.Host | Data.ObjHosts)
    options: View.ComponentOptions
    parent: HTMLElement

    constructor(content: (Data.Application | Data.BasicApplication | Data.Host | Data.ObjHosts), options: View.ComponentOptions = null, parent: HTMLElement = null) {
        this.content = content
        this.options = options
        this.parent = parent
    }

    public render(): HTMLElement {
        return this.element
    }
}