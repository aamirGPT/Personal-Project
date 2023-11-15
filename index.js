document.addEventListener("DOMContentLoaded", function () {
    let coveredImage = document.getElementById("Covered-Image");
    let greeting = document.querySelector(".Section-1-Greeting");
    let subText = document.querySelector(".Section-1-SubText");
    let content = document.querySelector(".Section-1-Content");

    coveredImage.classList.add("slide-out");
    coveredImage.addEventListener("transitionend", function () {
        greeting.classList.add("slide-in");
        greeting.addEventListener("transitionend", function () {
            subText.classList.add("slide-in");
            subText.addEventListener("transitionend", function () {
                content.classList.add("slide-in");
            });
        });
    });
    let links = document.querySelectorAll(".Section-2-Links");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            links.forEach(function (otherLink) {
                otherLink.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});
