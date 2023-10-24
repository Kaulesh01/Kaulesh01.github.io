function hideImageAtScreenWidthThreshold() {
    var image = document.getElementById("hero");
    if (image && window.innerWidth <= 600) {
        image.style.display = "none";
    } else if (image) {
        image.style.display = "block";
    }
}

// Initial check when the page loads
hideImageAtScreenWidthThreshold();

// Listen for window resize events and check the screen width
window.addEventListener("resize", hideImageAtScreenWidthThreshold);
