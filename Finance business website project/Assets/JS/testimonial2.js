// Get the testimonial content element
const testimonialContent = document.getElementById('testimonialContent');

// Set the initial index
let currentIndex = 0;

// Function to loop through testimonials
function loopTestimonials() {
    // Calculate the next index
    currentIndex = (currentIndex + 2) % 3;

    // Move the testimonial content based on the index
    testimonialContent.style.transform = `translateX(-${currentIndex * 50}%)`;

    // Call the function again after 2 seconds
    setTimeout(loopTestimonials, 3000);
}

// Start the loop
loopTestimonials();
