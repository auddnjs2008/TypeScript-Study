var VideoInterface = /** @class */ (function () {
    function VideoInterface() {
        this.listUl = document.querySelector(".content__ul");
        this.re = /^((https):\/\/)?(www.)[a-z0-9]/;
    }
    VideoInterface.prototype.makeVideo = function (title, url, id) {
        var _a;
        if (title === "" || url === "")
            return;
        var li = document.createElement("li");
        li.setAttribute("id", String(id));
        li.className = "content__video";
        li.draggable = true;
        var iframe = document.createElement("iframe");
        iframe.src = url;
        var div = document.createElement("div");
        div.innerText = title;
        var button = document.createElement("button");
        button.innerText = "❌";
        li.appendChild(iframe);
        li.appendChild(div);
        li.appendChild(button);
        (_a = this.listUl) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    };
    return VideoInterface;
}());
export default VideoInterface;
