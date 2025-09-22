const tabs = document.querySelectorAll('.tab-wrapper button'); // assuming class="tab-wrapper"
const tabPanels = document.querySelectorAll('[role="tabpanel"]');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');
const sidebar = document.querySelector('.sidebar');
const subBtn = document.querySelectorAll('.contact__form--btn');
const input = document.querySelector('.contact__form--input');
const errorIcon = document.querySelector('.contact__form--icon');
const errorText = document.querySelector('.contact__form--error');
const background = document.querySelector('.contact__form__background');
const form = document.querySelector('.contact__form');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active state from all tabs and hide all tab panels
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tabPanels.forEach(panel => panel.hidden = true);

    // Add active state to clicked tab and show corresponding panel
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const tabPanelId = tab.getAttribute('aria-controls');
    document.getElementById(tabPanelId).hidden = false;
  });
});

   

// Sidebar toggle
navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  navClose.classList.toggle('active');
});

navClose.addEventListener('click', () => {
  sidebar.classList.remove('active');
  navClose.classList.remove('active');
});



form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = input.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    background.classList.add('error');
    errorIcon.classList.add('visible');
    errorText.classList.add('visible');
    errorText.textContent = 'Whoops, make sure it\'s an email';
  } else {
    background.classList.remove('error');
    errorIcon.classList.remove('visible');
    errorText.classList.remove('visible');
    errorText.textContent = '';
    form.submit(); // Optional: Replace with AJAX or success state
  }
});