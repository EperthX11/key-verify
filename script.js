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

        // Generate and display download link
        const downloadLink = document.createElement("a");
        downloadLink.href = "https://mega.nz/file/LI0CXD5J#rX2kWbQB-oGxkaLOHQgDLvhYkati4oRWzRJqp-J_hoo"; // Replace with the actual path
        downloadLink.download = "Account.txt";
        downloadLink.textContent = "Download Generated Text";
        historyDiv.appendChild(downloadLink);
    } else {
        historyDiv.innerHTML = "<p>Out of stock</p>";
    }
}


