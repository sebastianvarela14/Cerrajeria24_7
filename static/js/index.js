/* =========================================================
   TECNICERRAJEROS - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // Cerrar todos
            faqItems.forEach(otherItem => {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;

            });


            // Abrir el seleccionado
            if (!isActive) {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector(".header");

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       HEADER SHADOW
    ===================================================== */

    const header =
        document.querySelector(".header");

    const updateHeader = () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 8px 30px rgba(17, 19, 21, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    };

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", () => {

            image.style.background =
                "#e5e7eb";

            image.style.minHeight =
                "200px";

            image.style.objectFit =
                "contain";

        });

    });

});