interface List {
  onClickDelBtn(event: Event): void;
  localDel(id: number): void;
}

export default class ListInterfcae implements List {
  listUl: HTMLElement | null = document.querySelector(".content__ul");
  dragNode: HTMLLIElement | null = null;
  localDel(id: number) {
    type data = {
      title: string;
      content: string;
      id: number;
      type: string;
    };

    const initArray = localStorage.getItem("motion");
    const parseInitArray: data[] = initArray ? JSON.parse(initArray) : [];
    const fixedArray = parseInitArray.filter((item) => item.id !== id);
    localStorage.setItem("motion", JSON.stringify(fixedArray));
  }

  onClickDelBtn(event: Event) {
    const target = <HTMLElement>event.target;
    if (target.tagName === "BUTTON") {
      if (target.parentNode) {
        const id = (<HTMLLinkElement>target.parentNode).id;
        this.listUl?.removeChild(target.parentNode);
        this.localDel(parseInt(id));
      }
    }
  }

  cleanEvent(listes?: NodeListOf<HTMLElement>) {
    listes?.forEach((item) => {
      item.removeEventListener("dragover", (e) => this.onDragOver(e));
      item.removeEventListener("dragleave", (e) => this.onDragLeave(e));
      item.removeEventListener("drop", (e) => this.onDrop(e));
    });
  }

  onDragOver(event: Event) {
    event.preventDefault();
    if ((<HTMLElement>event.target).tagName === "LI")
      (<HTMLElement>event.target).style.border = "1px red solid";
  }

  onDragLeave(event: Event) {
    if ((<HTMLElement>event.target).tagName === "LI")
      (<HTMLElement>event.target).style.border = "unset";
  }

  changeNodeList(one: HTMLLIElement | null, two: HTMLLIElement) {
    if (one === two) return;
    type data = {
      title: string;
      content: string;
      id: number;
      type: string;
    };
    const origin = localStorage.getItem("motion");
    if (origin && one) {
      let parseOrigin: data[] = JSON.parse(origin);
      const oneId = JSON.parse(one.id);
      const twoId = JSON.parse(two.id);
      let oneObject: data;
      let twoObject: data;
      let oneIndex: number;
      let twoIndex: number;

      parseOrigin.forEach((item, index) => {
        if (item.id === oneId) {
          oneObject = item;
          oneIndex = index;
        } else if (item.id === twoId) {
          twoObject = item;
          twoIndex = index;
        }
      });

      parseOrigin = parseOrigin.map((item) => {
        if (item === oneObject) {
          return twoObject;
        } else if (item === twoObject) {
          return oneObject;
        } else {
          return item;
        }
      });

      const cloneNodeOne = one.cloneNode(true);
      const cloneNodeTwo = two.cloneNode(true);

      this.listUl?.replaceChild(cloneNodeTwo, one);
      this.listUl?.replaceChild(cloneNodeOne, two);
      one.remove();
      two.remove();

      localStorage.setItem("motion", JSON.stringify(parseOrigin));
    }
  }

  onDrop(event: Event) {
    //event.preventDefault();
    if ((<HTMLElement>event.target).tagName === "LI") {
      (<HTMLElement>event.target).style.border = "unset";
      this.changeNodeList(this.dragNode, <HTMLLIElement>event.target);
    }
  }

  onDragStart(event: Event) {
    this.dragNode = <HTMLLIElement>event.target;
  }

  init() {
    if (this.listUl) {
      this.listUl.addEventListener("click", (e) => this.onClickDelBtn(e));
      this.listUl.addEventListener("dragstart", (e) => this.onDragStart(e));
      this.listUl.addEventListener("dragover", (e) => this.onDragOver(e));
      this.listUl.addEventListener("dragleave", (e) => this.onDragLeave(e));
      this.listUl.addEventListener("drop", (e) => this.onDrop(e));
    }
  }
}
