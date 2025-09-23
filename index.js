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
    const tabId = tab.getAttribute('data-tab');

    // Remove active class from all tabs and panels
    tabs.forEach(t => t.classList.remove('is-active'));
    tabPanels.forEach(panel => panel.classList.remove('is-active'));

    // Add active class to clicked tab and matching panel
    tab.classList.add('is-active');
    document.getElementById(tabId).classList.add('is-active');
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