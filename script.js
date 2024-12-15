const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 3000); // Adjust the delay for the loading animation
});
document.getElementById('menuToggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu links
});


let scrollAmount = 0;
const scrollStep = 320; // Width of each card + gap

prevButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > carousel.scrollWidth - carousel.offsetWidth) {
        scrollAmount = carousel.scrollWidth - carousel.offsetWidth;
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.navbar a');

    // Add click event listener for each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'clicked' class from all links
            navLinks.forEach(l => l.classList.remove('clicked'));
            
            // Add 'clicked' class to the clicked link
            this.classList.add('clicked');
        });
    });
    function initMap() {
        // The location of your office (latitude and longitude)
        var officeLocation = { lat: 40.748817, lng: -73.985428 }; // Example coordinates (Change this to your location)
    
        // The map, centered at the office location
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: officeLocation,
        });
    
        // The marker, positioned at the office location
        var marker = new google.maps.Marker({
            position: officeLocation,
            map: map,
            title: "Our Office",
        });
    }
    