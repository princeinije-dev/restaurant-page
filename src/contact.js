
function loadContactPage() {
  const content = document.querySelector('#content');
  content.textContent = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';

  const introduction = document.createElement('p');
  introduction.textContent =
    'We would love to hear from you. Get in touch with us!';

  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');

  const phoneHeading = document.createElement('h2');
  phoneHeading.textContent = 'Phone';

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '0800 123 4567';

  const addressHeading = document.createElement('h2');
  addressHeading.textContent = 'Our Location';

  const address = document.createElement('p');
  address.textContent = 'Visit us for a delicious meal!';

  contactCard.appendChild(phoneHeading);
  contactCard.appendChild(phoneNumber);
  contactCard.appendChild(addressHeading);
  contactCard.appendChild(address);

  content.appendChild(heading);
  content.appendChild(introduction);
  content.appendChild(contactCard);
}

export default loadContactPage;
