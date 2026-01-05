import { allItems } from '../data/itemsData.js';

const recentContainer = document.getElementById('recentProducts');
const nextBtn = document.getElementById('recentNext');
const prevBtn = document.getElementById('recentPrev');

const recentIds = JSON.parse(localStorage.getItem('recentItems') || '[]');

const itemMap = {};
allItems.forEach(item => {
  itemMap[item.id] = item;
});

const VISIBLE_COUNT = 6;
let startIndex = 0;

function renderRecent() {
  recentContainer.innerHTML = '';

  const pageIds = recentIds.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  pageIds.forEach(id => {
    const item = itemMap[id];
    if (!item) return;

    recentContainer.insertAdjacentHTML('beforeend', `
      <div class="recent-product-item" data-id="${item.id}">
        <div class="placeholder-img" style="background:${item.bg}">
          ${item.title}
        </div>
      </div>
    `);
  });

  if (nextBtn) {
    nextBtn.style.display =
      startIndex + VISIBLE_COUNT >= recentIds.length
        ? 'none'
        : 'block';
  }

  if (prevBtn) {
    prevBtn.style.display =
      startIndex <= 0
        ? 'none'
        : 'block';
  }
}

if (!recentContainer || recentIds.length === 0) {
  if (nextBtn) nextBtn.style.display = 'none';
  if (prevBtn) prevBtn.style.display = 'none';
} else {
  renderRecent();
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (startIndex + VISIBLE_COUNT < recentIds.length) {
      startIndex++;
      renderRecent();
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (startIndex > 0) {
      startIndex--;
      renderRecent();
    }
  });
}
