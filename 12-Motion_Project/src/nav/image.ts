interface Image {
  makeImage(title: string, url: string, id: number): void;
}

export default class ImageInterface implements Image {
  listUl: HTMLElement | null = document.querySelector(".content__ul");
  re = /^((https):\/\/)?(www.)[a-z0-9]/;

  makeImage(title: string, url: string, id: number) {
    if (title === "" || url === "") return;

    const li = document.createElement("li");
    li.setAttribute("id", String(id));
    li.draggable = true;

    li.className = "content__image";
    const img = document.createElement("img");
    img.src = url;
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.innerText = "❌";
    div.innerText = title;
    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(button);
    this.listUl?.appendChild(li);
  }
}
