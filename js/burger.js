function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector('.burger-menu_button', '.burger-menu_lines');
  let links = menu.querySelectorAll('.burger-menu_link');
  let overlay = menu.querySelector('.burger-menu_overlay');
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => toggleMenu());   
  }
  overlay.addEventListener('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.classList.toggle('burger-menu_active');
    
    if (menu.classList.contains('burger-menu_active')) {
      document.querySelector('body').style.overlow = 'hidden';
    } else {
      document.querySelector('body').style.overlow = 'visible';
    }
  }
}

burgerMenu('.burger-menu');