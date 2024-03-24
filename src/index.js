import './style.css';
import { loadHome } from './home';

console.log('checking')

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', () => {
  loadHome();
});

// loadHome()