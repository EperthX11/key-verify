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
    const generatedText = "This is the generated text.";
    document.getElementById("generatedText").textContent = generatedText;

    // Store generated text in LocalStorage
    const history = getHistory();
    history.push(generatedText);
    saveHistory(history);
}

function getHistory() {
    const historyJson = localStorage.getItem("history");
    return historyJson ? JSON.parse(historyJson) : [];
}

function saveHistory(history) {
    const historyJson = JSON.stringify(history);
    localStorage.setItem("history", historyJson);
}

function showHistory() {
    const history = getHistory();
    const historyContainer = document.getElementById("historyContainer");

    if (history.length === 0) {
        historyContainer.textContent = "No history available.";
        return;
    }

    historyContainer.innerHTML = "<h2>History:</h2>";

    history.forEach(text => {
        const textElement = document.createElement("p");
        textElement.textContent = text;
        historyContainer.appendChild(textElement);
    });
}
