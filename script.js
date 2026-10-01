// STUDENT REGISTRATION

const registrationForm =
    document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

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

        // Demo only: store data in browser
        localStorage.setItem("studentName", name);
        localStorage.setItem("studentEmail", email);
        localStorage.setItem("studentPassword", password);

        message.innerHTML =
            "✅ Registration successful! You can now login.";

        message.style.color = "green";

        registrationForm.reset();
    });
}


// STUDENT LOGIN

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        const savedEmail =
            localStorage.getItem("studentEmail");

        const savedPassword =
            localStorage.getItem("studentPassword");

        const message =
            document.getElementById("loginMessage");

        if (
            email === savedEmail &&
            password === savedPassword
        ) {

            message.innerHTML =
                "✅ Login successful!";

            message.style.color = "green";

            setTimeout(function() {
                window.location.href =
                    "application.html";
            }, 1000);

        } else {

            message.innerHTML =
                "❌ Invalid email or password.";

            message.style.color = "red";
        }
    });
}
