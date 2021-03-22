var ListInterfcae = /** @class */ (function () {
    function ListInterfcae() {
        this.listUl = document.querySelector(".content__ul");
        this.dragNode = null;
    }
    ListInterfcae.prototype.localDel = function (id) {
        var initArray = localStorage.getItem("motion");
        var parseInitArray = initArray ? JSON.parse(initArray) : [];
        var fixedArray = parseInitArray.filter(function (item) { return item.id !== id; });
        localStorage.setItem("motion", JSON.stringify(fixedArray));
    };
    ListInterfcae.prototype.onClickDelBtn = function (event) {
        var _a;
        var target = event.target;
        if (target.tagName === "BUTTON") {
            if (target.parentNode) {
                var id = target.parentNode.id;
                (_a = this.listUl) === null || _a === void 0 ? void 0 : _a.removeChild(target.parentNode);
                this.localDel(parseInt(id));
            }
        }
    };
    ListInterfcae.prototype.cleanEvent = function (listes) {
        var _this = this;
        listes === null || listes === void 0 ? void 0 : listes.forEach(function (item) {
            item.removeEventListener("dragover", function (e) { return _this.onDragOver(e); });
            item.removeEventListener("dragleave", function (e) { return _this.onDragLeave(e); });
            item.removeEventListener("drop", function (e) { return _this.onDrop(e); });
        });
    };
    ListInterfcae.prototype.onDragOver = function (event) {
        event.preventDefault();
        if (event.target.tagName === "LI")
            event.target.style.border = "1px red solid";
    };
    ListInterfcae.prototype.onDragLeave = function (event) {
        if (event.target.tagName === "LI")
            event.target.style.border = "unset";
    };
    ListInterfcae.prototype.changeNodeList = function (one, two) {
        var _a, _b;
        if (one === two)
            return;
        var origin = localStorage.getItem("motion");
        if (origin && one) {
            var parseOrigin = JSON.parse(origin);
            var oneId_1 = JSON.parse(one.id);
            var twoId_1 = JSON.parse(two.id);
            var oneObject_1;
            var twoObject_1;
            var oneIndex_1;
            var twoIndex_1;
            parseOrigin.forEach(function (item, index) {
                if (item.id === oneId_1) {
                    oneObject_1 = item;
                    oneIndex_1 = index;
                }
                else if (item.id === twoId_1) {
                    twoObject_1 = item;
                    twoIndex_1 = index;
                }
            });
            parseOrigin = parseOrigin.map(function (item) {
                if (item === oneObject_1) {
                    return twoObject_1;
                }
                else if (item === twoObject_1) {
                    return oneObject_1;
                }
                else {
                    return item;
                }
            });
            var cloneNodeOne = one.cloneNode(true);
            var cloneNodeTwo = two.cloneNode(true);
            (_a = this.listUl) === null || _a === void 0 ? void 0 : _a.replaceChild(cloneNodeTwo, one);
            (_b = this.listUl) === null || _b === void 0 ? void 0 : _b.replaceChild(cloneNodeOne, two);
            one.remove();
            two.remove();
            localStorage.setItem("motion", JSON.stringify(parseOrigin));
        }
    };
    ListInterfcae.prototype.onDrop = function (event) {
        //event.preventDefault();
        if (event.target.tagName === "LI") {
            event.target.style.border = "unset";
            this.changeNodeList(this.dragNode, event.target);
        }
    };
    ListInterfcae.prototype.onDragStart = function (event) {
        this.dragNode = event.target;
    };
    ListInterfcae.prototype.init = function () {
        var _this = this;
        if (this.listUl) {
            this.listUl.addEventListener("click", function (e) { return _this.onClickDelBtn(e); });
            this.listUl.addEventListener("dragstart", function (e) { return _this.onDragStart(e); });
            this.listUl.addEventListener("dragover", function (e) { return _this.onDragOver(e); });
            this.listUl.addEventListener("dragleave", function (e) { return _this.onDragLeave(e); });
            this.listUl.addEventListener("drop", function (e) { return _this.onDrop(e); });
        }
    };
    return ListInterfcae;
}());
export default ListInterfcae;
