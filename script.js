document.getElementById("registrationForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("message");

    if (password !== confirmPassword) {

        message.innerHTML =
            "❌ Passwords do not match.";

        message.style.color = "red";

        return;
    }

    message.innerHTML =
        "✅ Registration successful!";

    message.style.color = "green";

    this.reset();
});
