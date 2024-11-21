document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.f-prods-btn');
  const cards = document.querySelectorAll('.f-prods-card');

  // Function to handle the button click
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Get the index of the clicked button
      const index = button.getAttribute('data-index');

      // Loop through all cards and apply transitions
      cards.forEach((card, cardIndex) => {
        if (cardIndex == index) {
          card.classList.add('show');
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
          card.classList.remove('show');
        }
      });

      // Hide all cards and show the selected card
      cards.forEach((card, cardIndex) => {
        if (cardIndex == index) {
          card.style.display = 'block'; // Show the selected card
        } else {
          card.style.display = 'none'; // Hide others
        }
      });
    });
  });

  // Initially, show the first card
  cards.forEach((card, index) => {
    card.style.display = index === 0 ? 'block' : 'none';
  });

  // Initially, set the first button as active
  buttons[0].classList.add('active');
});



// EXCLUSIVE OFFERS

// Data for the offers
const offersData = [
  { imgSrc: "offers1.webp", title: "Smart Bundles", description: "Buy More! Save Up to 45% off" },
  { imgSrc: "offers2.webp", title: "Bestselling Smartphones", description: "Elevate your Smartphone Experience" },
  { imgSrc: "offers3.webp", title: "Smart TV", description: "Biggest deals on Smart TVs" },
  { imgSrc: "offers4.webp", title: "Power Banks", description: "Power Up, Pay Less" },
  { imgSrc: "offers5.webp", title: "Audio Products", description: "For the Love of Music" },
    ];

// Select the container
const offersContainer = document.querySelector('.offers-container');

// Loop through the offers data and create cards
offersData.forEach(offer => {
  // Create the offers-card div
  const card = document.createElement('div');
  card.classList.add('offers-card');

  // Create the offers-img div
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('offers-img');
  imgDiv.style.backgroundImage = `url(${offer.imgSrc})`;
  imgDiv.style.backgroundSize = 'cover';
  imgDiv.style.backgroundPosition = 'center';

  // Create the offers-info div
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('offers-info');

  // Create and append the h3 and h4
  const title = document.createElement('h3');
  title.textContent = offer.title;

  const description = document.createElement('h4');
  description.textContent = offer.description;

  infoDiv.appendChild(title);
  infoDiv.appendChild(description);

  // Append imgDiv and infoDiv to the card
  card.appendChild(imgDiv);
  card.appendChild(infoDiv);

  // Append the card to the container
  offersContainer.appendChild(card);
});


//EXPLORE XIAOMI

