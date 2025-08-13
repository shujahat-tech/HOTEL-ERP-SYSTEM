document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const sidebarLinks = document.querySelectorAll(".sidebar a[href^='#']");
    const allIdElements = Array.from(document.querySelectorAll("[id]"));

    window.addEventListener("scroll", () => {
        let currentId = null;

        allIdElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                currentId = el.id;
            }
        });

        if (currentId) {
            sidebarLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");

                    // Auto-scroll sidebar smoothly
                    const linkRect = link.getBoundingClientRect();
                    const sidebarRect = sidebar.getBoundingClientRect();

                    if (linkRect.top < sidebarRect.top || linkRect.bottom > sidebarRect.bottom) {
                        link.scrollIntoView({ block: "center", behavior: "smooth" });
                    }
                }
            });
        }
    });
});
