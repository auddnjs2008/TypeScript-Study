var NavInterface = /** @class */ (function () {
    function NavInterface() {
        this.nav = document.querySelector(".header__ul");
        this.modal = document.querySelector(".modal");
        this.firstTitle = document.querySelector(".modal__first-title");
        this.secondTitle = document.querySelector(".modal__second-title");
    }
    NavInterface.prototype.displayModal = function () { };
    NavInterface.prototype.onClick = function (e) {
        var id = e.target.id;
        if (id === "image" || id === "video") {
            this.modal.style.display = "flex";
            this.modal.setAttribute("id", id);
            this.secondTitle && (this.secondTitle.innerText = "URL");
        }
        else if (id === "note") {
            this.modal.style.display = "flex";
            this.modal.id = id;
            this.secondTitle && (this.secondTitle.innerText = "Body");
        }
        else if (id === "task") {
            this.modal.style.display = "flex";
            this.modal.id = id;
            this.secondTitle && (this.secondTitle.innerText = "Body");
        }
    };
    NavInterface.prototype.init = function () {
        var _this = this;
        if (this.nav) {
            this.nav.addEventListener("click", function (e) { return _this.onClick(e); });
        }
    };
    return NavInterface;
}());
export default NavInterface;
