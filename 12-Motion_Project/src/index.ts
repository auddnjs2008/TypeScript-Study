import ListInterfcae from "./list/list.js";
import ModalInterface, { Image, Note, Task, Video } from "./modal/modal.js";
import NavInterface from "./nav/nav.js";

const NavBar = new NavInterface();
const Modal = new ModalInterface();
const List = new ListInterfcae();

const initDraw = () => {
  type data = {
    title: string;
    content: string;
    id: number;
    type: string;
  };

  const initArray = localStorage.getItem("motion");
  const parseInitArray: data[] = initArray ? JSON.parse(initArray) : [];
  if (parseInitArray !== []) {
    parseInitArray.forEach((item) => {
      switch (item.type) {
        case "image":
          Image.makeImage(item.title, item.content, item.id);
          break;
        case "video":
          Video.makeVideo(item.title, item.content, item.id);
          break;
        case "note":
          Note.makeNote(item.title, item.content, item.id);
          break;
        case "task":
          Task.makeTask(item.title, item.content, item.id);
          break;
      }
    });
  }
};

initDraw();
NavBar.init();
Modal.init();
List.init();
