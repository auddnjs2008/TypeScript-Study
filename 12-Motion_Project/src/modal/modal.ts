import ImageInterface from "../nav/image.js";
import NoteInterface from "../nav/note.js";
import TaskInterface from "../nav/task.js";
import VideoInterface from "../nav/video.js";

interface Modal {
  closeBtn(event: Event): void;
  onSubmit(event: Event): void;
  onClick(event: Event): void;
}

export const Image = new ImageInterface();
export const Note = new NoteInterface();
export const Task = new TaskInterface();
export const Video = new VideoInterface();

export default class ModalInterface implements Modal {
  modalWindow: HTMLElement | null = document.querySelector(".modal");
  modalForm: HTMLElement | null = document.querySelector(".modal__form");
  modalCloseBtn: HTMLElement | null = document.querySelector(".modal__close");
  titleInput: HTMLInputElement | null = document.querySelector(
    ".modal__title-input"
  );
  contentInput: HTMLInputElement | null = document.querySelector(
    ".modal__content-input"
  );

  closeBtn(event: Event) {
    if (this.modalWindow) {
      this.modalWindow.style.display = "none";
      this.titleInput && (this.titleInput.value = "");
      this.contentInput && (this.contentInput.value = "");
    }
  }

  localStore(title: string, content: string, type: string, id: number) {
    const origin = localStorage.getItem("motion");
    const parseOrigin: object[] = origin ? JSON.parse(origin) : [];
    const newList = [...parseOrigin, { title, content, id, type }];
    localStorage.setItem("motion", JSON.stringify(newList));
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const type = this.modalWindow ? this.modalWindow.id : "";
    const title = this.titleInput ? this.titleInput.value : "";
    const content = this.contentInput ? this.contentInput.value : "";
    // const re = /^((https):\/\/)?(www.)[a-z0-9]/;

    let isUrl = true;
    if (title === "" || content === "") return;
    const id = Date.now();
    switch (type) {
      case "image":
        Image.makeImage(title, content, id);
        //isUrl = re.test(content);
        break;
      case "video":
        Video.makeVideo(title, content, id);
        //isUrl = re.test(content);

        break;
      case "note":
        Note.makeNote(title, content, id);
        break;
      case "task":
        Task.makeTask(title, content, id);
        break;
      default:
        return;
    }

    this.modalWindow && (this.modalWindow.style.display = "none");
    isUrl && this.localStore(title, content, type, id);
    this.titleInput && (this.titleInput.value = "");
    this.contentInput && (this.contentInput.value = "");
  }

  onClick(event: Event) {}

  registerEventes() {
    this.modalForm?.addEventListener("submit", (e) => this.onSubmit(e));
    this.modalCloseBtn?.addEventListener("click", (e) => this.closeBtn(e));
  }

  init() {
    this.registerEventes();
  }
}
