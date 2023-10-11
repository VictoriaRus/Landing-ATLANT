const burgerBtn = document.querySelector(".header__burger");
const closeBtn = document.querySelector(".navigation-mobile__close");
const nav = document.querySelector(".navigation-mobile");

const closeMenu = () => {
    nav.classList.add("close");
    document.body.style.overflow = "auto";
}

const openMenu = () => {
    nav.classList.remove("close");
    document.body.style.overflow = "hidden";
}

const close = (e) => {
    console.log(e.target);
    if (e.target === e.target.closest(".navigation-mobile")) {
        closeMenu();
    }
    if (e.target.tagName === "LI" ||
        e.target.tagName === "A" ||
        e.target.tagName === "IMG" ||
        e.target.tagName === "BUTTON") {
        closeMenu();
    }
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", close);
nav.addEventListener("click", close);