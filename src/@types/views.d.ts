declare namespace View {
    interface IComponent {
        tag: string,
        content: string,
    }

    interface IApplication {
        render: (content: any, parent?: any) => HTMLElement
    }

    type ComponentOptions = {
        click?: (e: Event) => void;
    }

    type CustomEvent = {
        detail: {
            classname: string
        }
        & Event
    }
}