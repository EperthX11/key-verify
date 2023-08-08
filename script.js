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
    const historyDiv = document.getElementById("history");

    if (generateItems.length > 0) {
        let newItem = generateItems.shift(); // Remove the first item from the array
        generatedItems.push(newItem);

        if (generateItems.length === 0) {
            historyDiv.innerHTML = "<p>Out of stock</p>";
        } else {
            historyDiv.innerHTML = `<p>${newItem}</p>`;
        }

        // Generate and download text file
        const blob = new Blob(["his"], { type: "text/plain" });
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = window.URL.createObjectURL(blob);
        a.download = "Accounts.txt";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
    } else {
        historyDiv.innerHTML = "<p>Out of stock</p>";
    }
}



function showHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.style.display = "block";
}
