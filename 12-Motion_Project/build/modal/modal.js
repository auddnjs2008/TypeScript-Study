var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import ImageInterface from "../nav/image.js";
import NoteInterface from "../nav/note.js";
import TaskInterface from "../nav/task.js";
import VideoInterface from "../nav/video.js";
export var Image = new ImageInterface();
export var Note = new NoteInterface();
export var Task = new TaskInterface();
export var Video = new VideoInterface();
var ModalInterface = /** @class */ (function () {
    function ModalInterface() {
        this.modalWindow = document.querySelector(".modal");
        this.modalForm = document.querySelector(".modal__form");
        this.modalCloseBtn = document.querySelector(".modal__close");
        this.titleInput = document.querySelector(".modal__title-input");
        this.contentInput = document.querySelector(".modal__content-input");
    }
    ModalInterface.prototype.closeBtn = function (event) {
        if (this.modalWindow) {
            this.modalWindow.style.display = "none";
            this.titleInput && (this.titleInput.value = "");
            this.contentInput && (this.contentInput.value = "");
        }
    };
    ModalInterface.prototype.localStore = function (title, content, type, id) {
        var origin = localStorage.getItem("motion");
        var parseOrigin = origin ? JSON.parse(origin) : [];
        var newList = __spreadArray(__spreadArray([], parseOrigin), [{ title: title, content: content, id: id, type: type }]);
        localStorage.setItem("motion", JSON.stringify(newList));
    };
    ModalInterface.prototype.onSubmit = function (event) {
        event.preventDefault();
        var type = this.modalWindow ? this.modalWindow.id : "";
        var title = this.titleInput ? this.titleInput.value : "";
        var content = this.contentInput ? this.contentInput.value : "";
        // const re = /^((https):\/\/)?(www.)[a-z0-9]/;
        var isUrl = true;
        if (title === "" || content === "")
            return;
        var id = Date.now();
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
    };
    ModalInterface.prototype.onClick = function (event) { };
    ModalInterface.prototype.registerEventes = function () {
        var _this = this;
        var _a, _b;
        (_a = this.modalForm) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) { return _this.onSubmit(e); });
        (_b = this.modalCloseBtn) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) { return _this.closeBtn(e); });
    };
    ModalInterface.prototype.init = function () {
        this.registerEventes();
    };
    return ModalInterface;
}());
export default ModalInterface;
