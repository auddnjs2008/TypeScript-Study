import ListInterfcae from "./list/list.js";
import ModalInterface, { Image, Note, Task, Video } from "./modal/modal.js";
import NavInterface from "./nav/nav.js";
var NavBar = new NavInterface();
var Modal = new ModalInterface();
var List = new ListInterfcae();
var initDraw = function () {
    var initArray = localStorage.getItem("motion");
    var parseInitArray = initArray ? JSON.parse(initArray) : [];
    if (parseInitArray !== []) {
        parseInitArray.forEach(function (item) {
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
