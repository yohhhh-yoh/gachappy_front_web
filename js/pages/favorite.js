import { favoriteItems } from '../data/mock.js';

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

// ボタンクリックで開閉
sortBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // ← 追加
  sortMenu.style.display =
    sortMenu.style.display === "block" ? "none" : "block";
});

// メニュー内クリック（選択時は閉じる）
sortMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // ← 追加
  if (e.target.tagName !== "LI") return;

  sortLabel.textContent = e.target.textContent;
  sortMenu.style.display = "none";

  const sortType = e.target.dataset.sort;
  console.log("並び替え:", sortType);
  // 実際の並び替え処理
});

// ドロップダウン外クリックで閉じる
document.addEventListener("click", () => {
  sortMenu.style.display = "none";
});

//　お気に入り登録されている商品の数
const resultCount = document.getElementById("resultCount");
const total = favoriteItems.length;
if (total === 0) {
  resultCount.textContent = "0件";
} else {
  resultCount.textContent = `すべて 1〜${total}件（${total}件）`;
}

// 登録されている商品の表示
cardContainer.innerHTML = ""; // 初期化
favoriteItems.forEach(item => {
  cardContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" data-id="${item.id}">
      <div class="placeholder-img" style="background: ${item.bg};"></div>

      <div class="card-content">
        <div class="card-title">
          <div class="card-title-text">${item.title}</div>
          <div class="heart-icon"></div>
        </div>

        <div class="card-subtitle">${item.maker}</div>
        <div class="card-price">${item.price}</div>
      </div>
    </div>
    `
  );
});

document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  // お気に入りボタン押下時は遷移させない
  if (e.target.closest('.heart-icon')) return;

  const id = card.dataset.id;
  if (!id) return;

  // 詳細ページへ遷移
  location.href = `/detail.html?id=${id}`;
});