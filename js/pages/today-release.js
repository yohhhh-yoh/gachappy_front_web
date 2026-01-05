import { todayData } from '../data/mock.js';

// 発売日の表示
const pageTitle = document.getElementById('pageTitle');

if (pageTitle) {
  const today = new Date();

  const month = today.getMonth() + 1;
  const day = today.getDate();

  // pageTitle.textContent = `${month}月${day}日　発売新商品一覧`;
  pageTitle.textContent = `12月1日　発売新商品一覧`;  // テスト用に固定
}

// 商品件数の表示
// 件数表示
const resultCount = document.getElementById('resultCount');
const total = todayData.length;

resultCount.textContent =
  total === 0 ? '0件' : `すべて 1〜${total}件（${total}件）`;


// 表示方法切り替え
const cardContainer = document.getElementById('today-release');
const gridBtn = document.querySelector('.view-btn.grid');
const listBtn = document.querySelector('.view-btn.list');

gridBtn.addEventListener('click', () => {
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');

  cardContainer.classList.remove('card-list');
  cardContainer.classList.add('card-grid');
});

listBtn.addEventListener('click', () => {
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');

  cardContainer.classList.remove('card-grid');
  cardContainer.classList.add('card-list');
});

// 表示順の切り替え
const sortBtn = document.getElementById("sortBtn");
const sortMenu = document.getElementById("sortMenu");
const sortLabel = document.getElementById("sortLabel");

sortBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sortMenu.style.display = sortMenu.style.display === "block" ? "none" : "block";
});

sortMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName !== "LI") return;

  sortLabel.textContent = e.target.textContent;
  sortMenu.style.display = "none";

  const sortType = e.target.dataset.sort;
  console.log("並び替え:", sortType);
  // 並び替え処理はここで実装
});

document.addEventListener("click", () => {
  sortMenu.style.display = "none";
});

// 本日発売商品の表示
const container = document.getElementById('today-release');

todayData.forEach(card => {
  container.insertAdjacentHTML('beforeend', `
    <div class="card" data-id="${card.id}">
      <div class="placeholder-img" style="background: ${card.bg};"></div>
      <div class="card-content">
        <div class="card-title">
          <div class="card-title-text">${card.title}</div>
          <div class="heart-icon"></div>
        </div>
        <div class="card-subtitle">${card.maker}</div>
        <div class="card-price">${card.price}</div>
      </div>
    </div>
  `);
});

// カードクリックで詳細ページへ
document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  if (e.target.closest('.heart-icon')) return;

  const id = card.dataset.id;
  if (!id) return;

  location.href = `/detail.html?id=${id}`;
});
