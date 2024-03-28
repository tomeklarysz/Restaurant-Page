const loadContact = () => {
  const conDiv = document.getElementById('content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact us!';
  h1.style.textAlign = 'center';
  conDiv.appendChild(h1);
  
  conDiv.style.display = 'flex';
  conDiv.style.flexDirection = 'column';
  conDiv.style.alignItems = 'center';

  const infoDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  h3.textContent = 'Manager';
  const phone = document.createElement('p');
  const mail = document.createElement('p');
  phone.textContent = '555-555-555';
  mail.textContent = 'realEmail@example.com';
  infoDiv.appendChild(h3);
  infoDiv.appendChild(phone);
  infoDiv.appendChild(mail);

  conDiv.appendChild(infoDiv);
}

export { loadContact };