// Mock user database
const users = [
    { username: "philipwillson", password: "07061277506P" },
    { username: "admin1", password: "1aPHILIP" }
];

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Check login credentials
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        message.textContent = "Login successful! Redirecting...";
        message.style.color = "green";

        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = "/src/public/admin_notification.html";
        }, 2000);
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }

    // Clear the form
    document.getElementById("loginForm").reset();
});

