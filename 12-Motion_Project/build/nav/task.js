var TaskInterface = /** @class */ (function () {
    function TaskInterface() {
        this.listUl = document.querySelector(".content__ul");
    }
    TaskInterface.prototype.makeTask = function (title, body, id) {
        var _a;
        if (title === "" || body === "")
            return;
        var li = document.createElement("li");
        li.setAttribute("id", String(id));
        li.className = "content__task";
        li.draggable = true;
        var h2 = document.createElement("h2");
        h2.innerText = title;
        var div = document.createElement("div");
        div.innerText = "\u2022 " + body;
        var button = document.createElement("button");
        button.innerText = "❌";
        li.appendChild(h2);
        li.appendChild(div);
        li.appendChild(button);
        (_a = this.listUl) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    };
    return TaskInterface;
}());
export default TaskInterface;
