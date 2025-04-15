const langBtn = document.getElementById("language-btn");
const langMenu = document.getElementById("language-menu");

langBtn.addEventListener("click", () => {
  const isOpen = langMenu.style.display === "block";
  langMenu.style.display = isOpen ? "none" : "block";
  langBtn.parentElement.classList.toggle("open", !isOpen);
});

function setLanguage(lang) {
  // Hide all language-specific content
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = "none";
  });

  // Show only selected language content
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach((el) => {
    el.style.display = "block";
  });

  // Change button label
  let label;
  if (lang === "en") label = "Language";
  if (lang === "fr") label = "Langue";
  if (lang === "cy") label = "Iaith";

  langBtn.innerHTML = `${label} <span class="arrow">▼</span>`;

  // Close the menu
  langMenu.style.display = "none";
  langBtn.parentElement.classList.remove("open");
}
