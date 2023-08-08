// Your key verification code
function verifyKey() {
    const enteredKey = document.getElementById("keyInput").value;
    const correctKey = "500168-492367-110231";

    if (enteredKey === correctKey) {
        // Modify the URL to match your actual generate.html location
        window.location.href = "generate.html";
    } else {
        document.getElementById("errorMessage").textContent = "Incorrect key. Please try again.";
    }
}

function generateLink() {
    const generateLink = document.getElementById("generateLink");
    generateLink.innerHTML = `<a href="https://mega.nz/file/LI0CXD5J#rX2kWbQB-oGxkaLOHQgDLvhYkati4oRWzRJqp-J_hoo" target="_blank">Click here to generate</a>`;
}
