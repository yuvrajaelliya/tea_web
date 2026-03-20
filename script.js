// Light Theme Only - Dark mode removed by request

// Explore Button Smooth Scroll
document.getElementById("exploreBtn").addEventListener("click", function() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

// Menu Filter
function filterMenu(category) {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        if(category === "all") {
            item.style.display = "block";
        } else {
            item.style.display = item.classList.contains(category) ? "block" : "none";
        }
    });
}

// Testimonial Slider
const reviews = [
    '"Best chai in town!"',
    '"Amazing ambience and taste!"',
    '"Affordable and delicious!"'
];

let index = 0;
setInterval(() => {
    index = (index + 1) % reviews.length;
    document.getElementById("review").innerText = reviews[index];
}, 3000);

// Scroll Image Reveal
window.addEventListener("scroll", function() {
    const scrollImage = document.querySelector(".scroll-image");
    
    if(scrollImage) {
        const rect = scrollImage.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if(isVisible) {
            scrollImage.classList.add("visible");
        } else {
            scrollImage.classList.remove("visible");
        }
    }
});