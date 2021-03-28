import { BaseComponent } from "../../component.js";

export class ToDoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="todo">
               <h1 class="page-item__title todo__title"></h1>
               <input type="checkbox" class="todo__checkbox"></input>
               <label for="todo-checkbox" class="todo-label"></label>
               </section>`);

    const h1Element = this.element.querySelector(
      ".todo__title"
    )! as HTMLElement;
    h1Element.textContent = title;
    const todoElement = this.element.querySelector(
      ".todo-label"
    )! as HTMLLabelElement;
    todoElement.textContent = body;
  }
}
