
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
  notification_section.style.display="none";
}
function about_change(){
  home_section.style.display="none";
  about_section.style.display="block";
  social_section.style.display="none";
  notification_section.style.display="none";
}

function social_change(){
  home_section.style.display="none";
  notification_section.style.display="none";
  about_section.style.display="none";
  social_section.style.display="block";
}

function notification_change(){
home_section.style.display="none";
notification_section.style.display="block";
about_section.style.display="none";
social_section.style.display="none";
notification_dot.style.display="none";


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
// Store messages in localStorage for simplicity
const messageForm = document.getElementById("messageForm");
const messageList = document.getElementById("messageList");

// Handle Admin Message Sending
if (messageForm) {
    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = document.getElementById("message").value;
        sendMessage(message);
        alert("Message Sent!");
        messageForm.reset();
    });
}

// Handle User Messages Display
if (messageList) {
    displayMessages();
}

function sendMessage(message) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
}

function displayMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messageList.innerHTML = ""
    messages.forEach((msg, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${msg} <button class="delete" onclick="deleteMessage(${index})">X</button>`;
        messageList.appendChild(li);
    });
    notification_dot.style.display="block";


}

function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages();
    notification_dot.style.display="none";  
}







//notification page end================//