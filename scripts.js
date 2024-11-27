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
loadSectionContent("section-2", "article/ArticlePart2.txt");
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
    visualizations.forEach((map, i) => {
        if (i === index) {
            map.classList.add("active");
        } else {
            map.classList.remove("active");
        }
    });
}

// Set up Scrollama
scroller
    .setup({
        step: ".article section", // Match each section in the article
        offset: 0.5, // Trigger when the section is in the middle of the viewport
        debug: false, // Enable to visualize trigger points
    })
    .onStepEnter((response) => {
        const index = parseInt(response.index, 10);
        activateMap(index); // Change the map based on the section
    });

// Handle window resizing
window.addEventListener("resize", scroller.resize);