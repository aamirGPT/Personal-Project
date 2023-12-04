document.addEventListener("DOMContentLoaded", function () {
    function performTransitions() {
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
    }

    // Check if all resources (including images) are loaded
    if (document.readyState === "complete") {
        // If everything is already loaded, perform transitions immediately
        performTransitions();
    } else {
        // If not, wait for the 'load' event to ensure all resources are loaded
        window.addEventListener("load", performTransitions);
    }
    let links = document.querySelectorAll(".Section-2-Links");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            links.forEach(function (otherLink) {
                otherLink.classList.remove("active");
            });

            link.classList.add("active");

            // Smooth scroll to the target section
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            console.log(targetSection);

            if (targetSection) {
                const extraOffset = -50; // Adjust this value for the extra offset
                const targetPosition =
                    targetSection.getBoundingClientRect().bottom +
                    window.scrollY +
                    extraOffset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    const section2 = document.querySelector(".Section-2");
    const section3 = document.querySelector(".Section-3");

    // Options for the Intersection Observer
    const options = {
        root: null, // use the viewport as the root
        rootMargin: "0px", // no margin
        threshold: 0, // trigger when 10% of Section-1-Landing is visible
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            // If Section-1-Landing is not in view, make Section-2 sticky
            if (!entry.isIntersecting) {
                section2.classList.add("sticky");
                section3.classList.add("Section-3-Padding");
            } else {
                section2.classList.remove("sticky");
                section3.classList.remove("Section-3-Padding");
            }
        });
    }, options);

    // Observe the Section-1-Landing element
    observer.observe(document.querySelector(".Section-1-Landing"));

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.bottom >=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight)) ||
            (rect.top >= 0 &&
                rect.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight))
        );
    }
    function handleDownToUpTransition() {
        const cards = document.querySelectorAll(".DownToUpTransition");
        cards.forEach((card) => {
            if (isElementInViewport(card)) {
                card.classList.add("visible");
            }
        });
    }

    document.addEventListener("scroll", handleDownToUpTransition);

    function handleRightToLeftTransition() {
        const Elements = document.querySelectorAll(".RightToLeftTransition");
        Elements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add("visible");
            }
        });
    }

    document.addEventListener("scroll", handleRightToLeftTransition);

    function handleLeftToRightTransition() {
        const Elements = document.querySelectorAll(".LeftToRightTransition");
        Elements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add("visible");
            }
        });
    }

    document.addEventListener("scroll", handleLeftToRightTransition);
});
