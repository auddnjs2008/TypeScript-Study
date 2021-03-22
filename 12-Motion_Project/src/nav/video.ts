interface Video {
  makeVideo(title: string, url: string, id: number): void;
}

export default class VideoInterface implements Video {
  listUl: HTMLElement | null = document.querySelector(".content__ul");
  re = /^((https):\/\/)?(www.)[a-z0-9]/;

  makeVideo(title: string, url: string, id: number) {
    if (title === "" || url === "") return;

    const li = document.createElement("li");
    li.setAttribute("id", String(id));
    li.className = "content__video";
    li.draggable = true;
    const iframe = document.createElement("iframe");
    iframe.src = url;
    const div = document.createElement("div");
    div.innerText = title;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(iframe);
    li.appendChild(div);
    li.appendChild(button);
    this.listUl?.appendChild(li);
  }
}
