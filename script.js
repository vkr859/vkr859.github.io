document.addEventListener("DOMContentLoaded", function () {
    // Apply fadeIn animation to each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        section.classList.add("animation-fadeIn");
    });

    // Smooth scroll to top when the button is clicked
    const button = document.querySelector(".button");
    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
