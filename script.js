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

// Generate the link and display it
function generateLink() {
    const generatedLink = "https://mega.nz/file/uAMWhLgL#2pc0jRNRjKttzwmestEUCpAkD7R-SXKhgXD2t9AJiaQ";
    document.getElementById("generatedLink").innerHTML = `<a href="${generatedLink}" target="_blank">Download Link</a>`;
}
