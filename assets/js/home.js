
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
  if(notification_section.style.display=="block"){
notification_dot.style.display="none";
  }

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

    if ( li.className == 'note-item'){
      notification_dot.style.display="block";
    }
    else{
      notification_dot.style.display="none";
    }
    

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