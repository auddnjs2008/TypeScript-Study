import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
           <h1 class="page-item__title note__title"></h1>
           <p class="note__body"></p>
           </section>`);
    const h1Element = this.element.querySelector(
      ".note__title"
    )! as HTMLElement;
    h1Element.textContent = title;
    const pElement = this.element.querySelector(".note__body")! as HTMLElement;
    pElement.textContent = body;
  }
}
