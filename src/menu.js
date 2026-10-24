
function loadMenuPage() {
  const content = document.querySelector('#content');
  content.textContent = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Our Menu';
  content.appendChild(heading);

  const meals = [
    { name: 'Jollof Rice', price: '₦3,000', description: 'Delicious rice cooked in rich tomato sauce.' },
    { name: 'Fried Rice', price: '₦3,500', description: 'Tasty fried rice served fresh.' },
    { name: 'Grilled Chicken', price: '₦4,000', description: 'Tender chicken seasoned with special spices.' }
  ];

  meals.forEach((meal) => {
    const card = document.createElement('div');
    card.classList.add('meal-card');

    const mealName = document.createElement('h2');
    mealName.textContent = meal.name;

    const mealDescription = document.createElement('p');
    mealDescription.textContent = meal.description;

    const mealPrice = document.createElement('strong');
    mealPrice.textContent = meal.price;

    card.appendChild(mealName);
    card.appendChild(mealDescription);
    card.appendChild(mealPrice);

    content.appendChild(card);
  });
}

export default loadMenuPage;
