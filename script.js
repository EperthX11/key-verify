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

        // Redirect to the provided URL
        window.location.href = "https://mega.nz/file/LI0CXD5J#rX2kWbQB-oGxkaLOHQgDLvhYkati4oRWzRJqp-J_hoo";
    } else {
        historyDiv.innerHTML = "<p>Out of stock</p>";
    }
}
