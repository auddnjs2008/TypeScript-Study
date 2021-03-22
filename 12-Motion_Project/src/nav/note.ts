interface Note {
  makeNote(title: string, body: string, id: number): void;
}

export default class NoteInterface implements Note {
  listUl: HTMLElement | null = document.querySelector(".content__ul");

  makeNote(title: string, body: string, id: number) {
    if (title === "" || body === "") return;

    const li = document.createElement("li");
    li.setAttribute("id", String(id));
    li.className = "content__note";
    li.draggable = true;
    const h2 = document.createElement("h2");
    h2.innerText = title;
    const p = document.createElement("p");
    p.innerText = body;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(button);

    this.listUl?.appendChild(li);
  }
}
