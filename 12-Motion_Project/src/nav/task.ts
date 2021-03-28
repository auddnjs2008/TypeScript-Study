interface Task {
  makeTask(title: string, body: string, id: number): void;
}

export default class TaskInterface implements Task {
  listUl: HTMLElement | null = document.querySelector(".content__ul");

  makeTask(title: string, body: string, id: number) {
    if (title === "" || body === "") return;

    const li = document.createElement("li");
    li.setAttribute("id", String(id));
    li.className = "content__task";
    li.draggable = true;
    const h2 = document.createElement("h2");
    h2.innerText = title;
    const div = document.createElement("div");
    div.innerText = `• ${body}`;
    const button = document.createElement("button");
    button.innerText = "❌";

    li.appendChild(h2);
    li.appendChild(div);
    li.appendChild(button);
    this.listUl?.appendChild(li);
  }
}
