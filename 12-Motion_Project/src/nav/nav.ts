interface Nav {
  onClick(node: Event): void; // click 이벤트 등록합수
  displayModal(): void;
  init(): void;
}

export default class NavInterface implements Nav {
  nav: HTMLElement | null = document.querySelector(".header__ul");
  modal: HTMLElement | null = document.querySelector(".modal");
  firstTitle: HTMLElement | null = document.querySelector(
    ".modal__first-title"
  );
  secondTitle: HTMLElement | null = document.querySelector(
    ".modal__second-title"
  );

  displayModal() {}

  onClick(e: Event) {
    const id = (<HTMLElement>e.target).id;
    if (id === "image" || id === "video") {
      (<HTMLElement>this.modal).style.display = "flex";
      (<HTMLElement>this.modal).setAttribute("id", id);
      this.secondTitle && (this.secondTitle.innerText = "URL");
    } else if (id === "note") {
      (<HTMLElement>this.modal).style.display = "flex";
      (<HTMLElement>this.modal).id = id;
      this.secondTitle && (this.secondTitle.innerText = "Body");
    } else if (id === "task") {
      (<HTMLElement>this.modal).style.display = "flex";
      (<HTMLElement>this.modal).id = id;
      this.secondTitle && (this.secondTitle.innerText = "Body");
    }
  }

  init() {
    if (this.nav) {
      this.nav.addEventListener("click", (e) => this.onClick(e));
    }
  }
}
