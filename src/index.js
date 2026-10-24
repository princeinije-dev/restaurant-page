import loadHomePage from './homepage.js';
import './style.css';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

homeButton.addEventListener('click', () => {
  loadHomePage();
});

menuButton.addEventListener('click', () => {
  loadMenuPage();
});

contactButton.addEventListener('click', () => {
  loadContactPage();
});

loadHomePage();
