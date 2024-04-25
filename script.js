document.getElementById("inputForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputData = document.getElementById("inputData").value;
    // Call a function to process the input data (e.g., send it to backend AI model)
    // For demonstration purposes, let's just display the input data as the result
    displayResult(inputData);
});

function displayResult(result) {
    const resultContainer = document.getElementById("resultContainer");
    const resultText = document.getElementById("resultText");
    resultText.textContent = result;
    resultContainer.classList.remove("hidden");
}

// Initialize Leaflet map when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
});
