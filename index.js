const faqHeaders = document.querySelectorAll(".faq-header");

// Open first FAQ by default
faqHeaders[0].parentElement.classList.add("active");

faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const card = header.parentElement;

        // Close all others
        document.querySelectorAll(".faq-card").forEach(faq => {
            if (faq !== card) faq.classList.remove("active");
        });

        // Toggle clicked
        card.classList.toggle("active");
    });
});


// TESTMONIAL

const sliderTrack = document.getElementById('sliderTrack');
sliderTrack.innerHTML += sliderTrack.innerHTML;

const sliderTrack_2 = document.getElementById('sliderTrack-2');
sliderTrack_2.innerHTML += sliderTrack_2.innerHTML;
