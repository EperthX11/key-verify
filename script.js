// Your existing JavaScript code

let generateItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
let generatedItems = [];

// Your key verification code
function verifyKey() {
    const enteredKey = document.getElementById("keyInput").value;
    const correctKey = secrets.KEY; // Access the secret

    if (enteredKey === correctKey) {
        // Modify the URL to match your actual generate.html location
        window.location.href = "generate.html";
    } else {
        document.getElementById("errorMessage").textContent = "Incorrect key. Please try again.";
    }
}

function generateText() {
    // Redirect to the provided URL
    window.location.href = secrets.URL;
}

function showHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = generatedItems.map(item => `<p>${item}</p>`).join("");
}
