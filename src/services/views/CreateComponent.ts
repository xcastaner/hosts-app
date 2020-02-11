export class CreateComponent {
    static create(parent: HTMLElement, component: View.IComponent, className: string = null) {
        const element: HTMLElement = document.createElement(component.tag)

        if(className) {
            element.className = className
        }

        element.innerHTML = component.content

        return parent.appendChild(element)
    }
}
