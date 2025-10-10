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



// 

// COUNTER JS

// Select the counter elements and the section where counters should start
const counter1 = document.getElementById("counter-1");
const counter2 = document.getElementById("counter-2");
const counter3 = document.getElementById("counter-3");
const counter4 = document.getElementById("counter-4");
const counterSection = document.getElementById("achievements");

// Function to start the counter for each counter element with different target and speed
const startCounter = (counterElement, target ,speed) => {
    let counter = 0;

    const interval = setInterval(() => {
        counter++;
        counterElement.textContent = counter;
        if (counter >= target) {
            clearInterval(interval);
        }
    }, speed); // Different speed for each counter
};

// Observer to trigger counters when the section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // Start counters for each counter element with different targets and speeds
            startCounter(counter1, 500 , 0.5); // Target 1500, fast speed
            startCounter(counter2, 1000 , 0.5); // Target 2000, medium speed
            startCounter(counter3, 11 , 50); // Target 2500, slow speed
            startCounter(counter4, 24 , 50); // Target 2500, slow speed
            observer.unobserve(entry.target); // Stop observing after counters start
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

observer.observe(counterSection);

