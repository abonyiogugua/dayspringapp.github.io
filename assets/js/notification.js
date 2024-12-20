//theme change page=============//
function toggleTheme(){
    const body = document.body;
      body.classList.toggle('dark-mode');
      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        };
    const loadTheme = () => {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    };
    
    window.onload = loadTheme;
    //theme change page end=============//

    


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRyb6LIoiWSPulOenyt05RbBx97fSYnmU",
  authDomain: "dayspring-app-ac7cd.firebaseapp.com",
  projectId: "dayspring-app-ac7cd",
  storageBucket: "dayspring-app-ac7cd.firebasestorage.app",
  messagingSenderId: "886633027940",
  appId: "1:886633027940:web:d1d21fe6627bb164f30271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Request permission for notifications
messaging.requestPermission()
    .then(() => messaging.getToken())
    .then(token => console.log("FCM Token:", token))
    .catch(err => console.error("Permission denied", err));

// Handle form submission
document.getElementById("notificationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "BPqNDiMmlDL2URmWfPXTSum6eHHnB2O89kwz9W6xyJ8Sv72rsnyze1axcYN1IxCzeGsHgt60Ysh9gZp9kCCR2FQ"
        },
        body: JSON.stringify({
            to: "/topics/all",
            notification: {
                title: title,
                body: message,
                icon: "icon.png" // Optional icon
            }
        })
    })
    .then(response => response.json())
    .then(data => console.log("Notification sent:", data))
    .catch(err => console.error("Error sending notification:", err));
});
