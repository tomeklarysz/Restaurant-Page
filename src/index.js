import './style.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

console.log('checking')

const contentWipe = () => {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  contentWipe();
  loadHome();
});

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  contentWipe();
  loadMenu();
});

const conBtn = document.getElementById('contact');
conBtn.addEventListener('click', () => {
  contentWipe();
  loadContact();
});
