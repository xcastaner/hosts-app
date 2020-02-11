import { Title } from "./Title"
import { AppName } from "./AppName"
import { Component } from "./Component"

export class Host extends Component {

    constructor(content: Data.Host, options: View.ComponentOptions = null, parent: HTMLElement = null) {
        super(content, options, parent)
        this.generateElement()
    }

    private generateElement() {
        this.element = document.getElementById('wrapper').appendChild(document.createElement('div'))
        this.element.className = 'box'
        Title.render((this.content as Data.Host).name, this.element)

        if (this.options && this.options.click) {
            this.element.addEventListener('click', this.options.click)
        }

        (this.content as Data.Host).applications.slice(0, 5).map((app: any) => {
            const appName = new AppName(app, {
                click: () => alert(`V${app.version}`)
            }, this.element)
            appName.render()
        })
    }
}