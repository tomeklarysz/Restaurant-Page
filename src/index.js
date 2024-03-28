import './style.css';
import { loadHome } from './home';
import { loadMenu } from './menu';

console.log('checking')

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  loadHome();
});

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', loadMenu);

// loadHome()