var NoteInterface = /** @class */ (function () {
    function NoteInterface() {
        this.listUl = document.querySelector(".content__ul");
    }
    NoteInterface.prototype.makeNote = function (title, body, id) {
        var _a;
        if (title === "" || body === "")
            return;
        var li = document.createElement("li");
        li.setAttribute("id", String(id));
        li.className = "content__note";
        li.draggable = true;
        var h2 = document.createElement("h2");
        h2.innerText = title;
        var p = document.createElement("p");
        p.innerText = body;
        var button = document.createElement("button");
        button.innerText = "❌";
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(button);
        (_a = this.listUl) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    };
    return NoteInterface;
}());
export default NoteInterface;
