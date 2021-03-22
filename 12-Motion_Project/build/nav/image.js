var ImageInterface = /** @class */ (function () {
    function ImageInterface() {
        this.listUl = document.querySelector(".content__ul");
        this.re = /^((https):\/\/)?(www.)[a-z0-9]/;
    }
    ImageInterface.prototype.makeImage = function (title, url, id) {
        var _a;
        if (title === "" || url === "")
            return;
        var li = document.createElement("li");
        li.setAttribute("id", String(id));
        li.draggable = true;
        li.className = "content__image";
        var img = document.createElement("img");
        img.src = url;
        var div = document.createElement("div");
        var button = document.createElement("button");
        button.innerText = "❌";
        div.innerText = title;
        li.appendChild(img);
        li.appendChild(div);
        li.appendChild(button);
        (_a = this.listUl) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    };
    return ImageInterface;
}());
export default ImageInterface;
