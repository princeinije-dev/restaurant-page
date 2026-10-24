
function loadHomePage() {
  const content = document.querySelector('#content');
  content.textContent = '';

  const hero = document.createElement('section');
  hero.classList.add('hero');

  const heading = document.createElement('h1');
  heading.textContent = 'Welcome to Our Restaurant';

  const paragraph = document.createElement('p');
  paragraph.textContent =
    'Fresh ingredients, delicious meals, and unforgettable moments.';

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Explore Our Menu';
  menuButton.id = 'explore-menu';

  hero.appendChild(heading);
  hero.appendChild(paragraph);
  hero.appendChild(menuButton);

  content.appendChild(hero);
}

export default loadHomePage;
