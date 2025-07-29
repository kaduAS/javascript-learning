let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

const form = document.getElementById('inventoryForm');
const nameInput = document.getElementById('itemName');
const typeSelect = document.getElementById('itemType');
const listContainer = document.getElementById('inventoryList');

function saveInventory() {
  localStorage.setItem('inventory', JSON.stringify(inventory));
}

const icons = {
  weapon: '🗡️',
  shield: '🛡️',
  potion: '🧪',
  keyItem: '🔑',
  misc: '🎒'
};

function renderInventory() {
  listContainer.innerHTML = '';

  inventory.forEach((item, index) => {
    const icon = icons[item.type] || '📦';

    const li = document.createElement('li');
    li.innerHTML = `
      <span>${icon} ${item.name}</span>
      <button class="remove-btn">Remove</button>
    `;

    li.querySelector('.remove-btn').addEventListener('click', () => {
      inventory.splice(index, 1);
      saveInventory();
      renderInventory();
    });

    listContainer.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const type = typeSelect.value;

  if (name) {
    inventory.push({ name, type });
    saveInventory();
    renderInventory();

    nameInput.value = '';
  }
});

// Item inicial para exemplo
if (inventory.length === 0) {
  inventory.push({ name: 'Master Sword', type: 'weapon' });
  saveInventory();
}

renderInventory();
