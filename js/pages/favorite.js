import { allItems } from '../data/itemsData.js';

// 全商品のID→データマップを作成
const itemMap = {};
allItems.forEach(item => {
  itemMap[item.id] = item;
});

// 表示方法切り替え
const cardContainer = document.getElementById('cardContainer');
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

// localStorage からお気に入りIDを取得
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

const resultCount = document.getElementById('resultCount');

// favorites のIDから商品情報を取得
const favoriteItems = favorites.map(id => itemMap[id]).filter(Boolean);

cardContainer.innerHTML = ""; // 初期化
resultCount.textContent = favoriteItems.length === 0
  ? "0件"
  : `すべて 1〜${favoriteItems.length}件（${favoriteItems.length}件）`;

// カードを表示
favoriteItems.forEach(item => {
  cardContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" data-id="${item.id}">
      <div class="placeholder-img" style="background: ${item.bg};"></div>
      <div class="card-content">
        <div class="card-title">
          <div class="card-title-text">${item.title}</div>
          <div class="heart-icon active"></div>
        </div>
        <div class="card-subtitle">${item.maker}</div>
        <div class="card-price">${item.price}</div>
      </div>
    </div>
    `
  );
});

// カードクリックで詳細ページへ
document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  if (e.target.closest('.heart-icon')) return; // お気に入り押下時は無視

  const id = card.dataset.id;
  if (!id) return;

  location.href = `/detail.html?id=${id}`;
});
