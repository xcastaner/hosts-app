import { CreateComponent } from "../services/views/CreateComponent";

export class Title {
    static render(content: string, parent: HTMLElement) {
        CreateComponent.create(parent, { tag: 'h2', content })
    }
}