import Picture from "./media/menu.jpg"

const loadMenu = () => {
  const menuDiv = document.getElementById('content');
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  h1.style.textAlign = 'center';
  menuDiv.appendChild(h1);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const menuPic = new Image();
  menuPic.src = Picture;
  menuPic.style.width = '80%';
  menuPic.style.objectFit = 'contain';
  imgContainer.appendChild(menuPic);
  menuDiv.appendChild(imgContainer);
  
}

export { loadMenu };