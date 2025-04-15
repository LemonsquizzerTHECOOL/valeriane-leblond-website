// Dropdown functionality for language selection
document.getElementById('language-btn').addEventListener('click', function () {
  const menu = document.getElementById('language-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  this.closest('.language-dropdown').classList.toggle('open');
});

// Language change function
function setLanguage(language) {
  // Hide all content first
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(function (el) {
    el.style.display = 'none';
  });

  // Show content for the selected language
  const selectedElements = document.querySelectorAll('[data-lang=' + language + ']');
  selectedElements.forEach(function (el) {
    el.style.display = 'block';
  });

  // Update the language dropdown button text
  const button = document.getElementById('language-btn');
  if (language === 'en') {
    button.textContent = 'Language ▼';
  } else if (language === 'fr') {
    button.textContent = 'Langue ▼';
  } else if (language === 'cy') {
    button.textContent = 'Iaith ▼';
  }
}
