// Dropdown functionality for language selection
document.getElementById('language-btn').addEventListener('click', function () {
  const menu = document.getElementById('language-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  this.closest('.language-dropdown').classList.toggle('open');
});

// Language change function
function setLanguage(language) {
  alert(`Language changed to ${language}`);
}
