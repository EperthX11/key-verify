
function verifyKey() {
    const enteredKey = document.getElementById("keyInput").value;
    const correctKey = "500168-492367-110231";

    if (enteredKey === correctKey) {
        window.location.href = "generate.html";
    } else {
        document.getElementById("errorMessage").textContent = "Incorrect key. Please try again.";
    }
}

function generateText() {
    const generatedText = "Nothing yet";
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML += `<p>${generatedText}</p>`;
}

function showHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.style.display = "block";
}


let generateItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
let generatedItems = [];

function generateText() {
    const historyDiv = document.getElementById("history");

    if (generateItems.length > 0) {
        let newItem = generateItems.shift(); // Remove the first item from the array
        generatedItems.push(newItem);

        if (generateItems.length === 0) {
            historyDiv.innerHTML = "<p>Out of stock</p>";
        } else {
            historyDiv.innerHTML = `<p>${newItem}</p>`;
        }
    } else {
        historyDiv.innerHTML = "<p>Out of stock</p>";
    }
}

