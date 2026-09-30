// Scroll Reveal Animation Observer
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Interactive Counter Playground
    const incrementBtn = document.getElementById("incrementBtn");
    const counterDisplay = document.getElementById("counterValue");
    let count = 0;

    incrementBtn.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;

        // Micro-animation feedback on click
        counterDisplay.style.transform = "scale(1.2)";
        setTimeout(() => {
            counterDisplay.style.transform = "scale(1)";
        }, 200);
    });

    // Smooth active nav link switching on scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a:not(.nav-btn)");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
