import Picture from './media/home.jpg';

const loadHome = () => {
  const homeDiv = document.getElementById('content');
  
  const h1 = document.createElement('h1')
  h1.textContent = 'Your local bubble tea place';
  h1.style.textAlign = 'center';
  homeDiv.appendChild(h1);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const homePic = new Image();
  homePic.src = Picture;
  imgContainer.appendChild(homePic);
  homeDiv.appendChild(imgContainer);
}

export { loadHome };