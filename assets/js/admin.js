// login form===========================
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
            window.location.href = "../pages/admin.html";
        }, 2000);
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }

    // Clear the form
    document.getElementById("loginForm").reset();
});

// login form end===========================


//loader=============//
// Wait for the entire page to load
window.addEventListener("load", function() {
    // Hide the preloader
    document.getElementById("preloader").style.display = "none";
    
    // Show the content
    document.getElementById("content").style.display = "block";
});
//loader end=============//

//theme change====================//

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
   

//theme change end================//





//notification page================//
const noteInput = document.getElementById('noteInput');
const noteList = document.getElementById('noteList');

// Load notes from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadNotes);

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => createNoteElement(note));
}

function saveNotes() {
    const notes = Array.from(document.querySelectorAll('.note-item .note-text')).map(
        note => note.textContent
    );
    localStorage.setItem('notes', JSON.stringify(notes));
}

function createNoteElement(noteText) {
    const li = document.createElement('li');
    li.className = 'note-item';
    

    const span = document.createElement('span');
    span.className = 'note-text';
    span.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = () => {
        li.remove();
        saveNotes();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    noteList.appendChild(li);
}

function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText) {
        createNoteElement(noteText);
        saveNotes();
        noteInput.value = ''; // Clear the input field
    }
}
//notification page end================//