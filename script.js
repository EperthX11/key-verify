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
    const generatedText = "Generated text goes here.";
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML += `<p>${generatedText}</p>`;
}

function showHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.style.display = "block";
}
