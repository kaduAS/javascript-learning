const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');
const searchInput = document.getElementById('search');

function openPopup(title, text) {
  popupTitle.innerText = title;
  popupText.innerText = text;
  popup.style.display = 'flex';
}

function closePopupFunc() {
  popup.style.display = 'none';
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h2').innerText;
    const text = card.querySelector('p').innerText;
    openPopup(title, text);
  });
});

closePopup.addEventListener('click', closePopupFunc);

window.addEventListener('click', e => {
  if (e.target === popup) closePopupFunc();
});

function filterCards() {
  const searchValue = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const title = card.querySelector('h2').innerText.toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = '';  // Mantém o display original (flex, block, etc)
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterCards);
