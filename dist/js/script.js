//Navbar fixed
window.onscroll = function() {
    const header = document.querySelector("header"); //mengambil element header
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

//hamburger
const hamburger = document.querySelector("#hamburger"); //carikan element yang id nya hamburger
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// Klik di luar Hamburger
window.addEventListener("click", function(e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});

//Dark Mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function() {
    if (darkToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}