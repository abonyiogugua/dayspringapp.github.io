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
    messageList.innerHTML = "";

    messages.forEach((msg, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${msg} <button class="delete" onclick="deleteMessage(${index})">X</button>`;
        messageList.appendChild(li);
    });
}

function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessages();
}



