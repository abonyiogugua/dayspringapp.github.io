
//loader=============//
// Wait for the entire page to load
window.addEventListener("load", function() {
  // Hide the preloader
  document.getElementById("preloader").style.display = "none";
  
  // Show the content
  document.getElementById("content").style.display = "block";
});
//loader end=============//

//content pages=============//
const home_section = document.getElementById("home_section");
const about_section = document.getElementById("about_section");
const social_section = document.getElementById("social_section");
const notification_section = document.getElementById("notification_section");
const notification_dot = document.getElementById("dot");


function home_change(){
  home_section.style.display="block";
  about_section.style.display="none";
  social_section.style.display="none";
}
function about_change(){
  home_section.style.display="none";
  about_section.style.display="block";
  social_section.style.display="none";
}

function social_change(){
  home_section.style.display="none";
  about_section.style.display="none";
  social_section.style.display="block";
}



//content pages end=============//

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

//notification page================//

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

// Request permission to send notifications
messaging.requestPermission()
.then(() => messaging.getToken())
.then(token => {
    console.log("FCM Token:", token);
    messaging.subscribeToTopic("users");
})
.catch(err => console.error("Permission denied", err));

// Handle incoming messages
messaging.onMessage(payload => {
console.log("Notification received:", payload);
alert(`Title: ${payload.notification.title}\nMessage: ${payload.notification.body}`);
});

//notification page end================//