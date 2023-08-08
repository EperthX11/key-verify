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
        const textContent = "his";
        const blob = new Blob([textContent], { type: "text/plain" });

        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "generated_text.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        historyDiv.innerHTML = "<p>Out of stock</p>";
    }
}

