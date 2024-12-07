// scripts.js
function loadSectionContent(sectionId, filePath) {
    fetch(filePath)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch((error) => console.error('Error loading content:', error));
}

// Call this for each section
loadSectionContent("section-1", "article/ArticlePart1.txt");
loadSectionContent("section-1_2", "article/article1_2.txt");
loadSectionContent("section-1_3", "article/article1_3.txt");
loadSectionContent("section-1_4", "article/article1_4.txt");
loadSectionContent("section-2", "article/ArticlePart2.txt");
loadSectionContent("section-2_2", "article/article2_2.txt");
loadSectionContent("section-2_3", "article/article2_3.txt");
loadSectionContent("section-3", "article/ArticlePart3.txt");

// Initialize Scrollama
const scroller = scrollama();

// Define map elements
const visualizations = [
    document.getElementById("v1"),
    document.getElementById("v2"),
    document.getElementById("v3"),
];

// Function to activate a map
function activateMap(index) {
    if (index <= 3 ) {
        visualizations[0].classList.add("active"); // Show the first map
        visualizations[1].classList.remove("active"); // Hide the second map
        visualizations[2].classList.remove("active"); // Hide the third map
    }
    // Show map 2 for the third section
    else if (index > 3 && index < 7) {
        visualizations[0].classList.remove("active"); // Hide the first map
        visualizations[1].classList.add("active"); // Show the second map
        visualizations[2].classList.remove("active"); // Hide the third map
    }
    // Show map 3 for the fourth section
    else if (index >= 7) {
        visualizations[0].classList.remove("active"); // Hide the first map
        visualizations[1].classList.remove("active"); // Hide the second map
        visualizations[2].classList.add("active"); // Show the third map
    }
}

// Set up Scrollama
scroller
    .setup({
        step: ".article section", // Match each section in the article
        offset: 0.5, // Trigger when the section is in the middle of the viewport
        debug: false, // Enable to visualize trigger points
    })
    .onStepEnter((response) => {
        let index = parseInt(response.index, 10);
        activateMap(index); // Change the map based on the section
    });

// function for handling close button
function closeBanner() {
    const banner = document.querySelector('.corner-banner');
    banner.style.display = 'none';
}

// Handle window resizing
window.addEventListener("resize", scroller.resize);