import { allItems } from '../data/itemsData.js';

const params = new URLSearchParams(location.search);
const id = params.get('id');

console.log('商品ID:', id);

// ID から商品情報を取得
const item = allItems.find(i => i.id === id);
if (!item) {
  console.error('商品が見つかりません');
} else {
  // お気に入りボタン
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.action-btn.favorite');
    if (!btn) return;

    const icon = btn.querySelector('.favorite-icon');
    if (!icon) return;

    icon.classList.toggle('active');

    // localStorage 更新
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (icon.classList.contains('active')) {
      if (!favorites.includes(item.id)) favorites.push(item.id);
    } else {
      favorites = favorites.filter(fav => fav !== item.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });

  // ページ読み込み時にハートがアクティブか確認
  window.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.action-btn.favorite .favorite-icon');
    if (!icon) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(item.id)) icon.classList.add('active');
  });

  // 商品情報表示
  const container = document.querySelector(".product-info-section");
  container.insertAdjacentHTML(
    "afterbegin",
    `
      <h1 class="product-title">${item.title}</h1>

      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">発売元</div>
          <div class="info-value">${item.maker}</div>
        </div>

        <div class="info-item">
          <div class="info-label">価格</div>
          <div class="info-value price">${item.price}</div>
        </div>

        <div class="info-item">
          <div class="info-label">商品タイプ</div>
          <div class="info-value">${item.type} </div>
        </div>

        <div class="info-item">
          <div class="info-label">種類数</div>
          <div class="info-value">${item.totalVariants}種類</div>
        </div>

        ${item.genre ? `
        <div class="info-item">
          <div class="info-label">ジャンル</div>
          <div class="info-value">${item.genre}</div>
        </div>
        ` : ''}

        ${item.series ? `
        <div class="info-item">
          <div class="info-label">シリーズ</div>
          <div class="info-value">${item.series}</div>
        </div>
        ` : ''}
      </div>

    `
  );

  // 画像表示
  const imageContainer = document.querySelector("#product-image");
  imageContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="placeholder-img"
           style="background: ${item.bg};">
      </div>
    `
  );
}

// リンクコピー
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");
  const toast = document.getElementById("toast");
  if (!shareBtn || !toast) return;

  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 1500);
    } catch (e) {
      alert("コピーに失敗しました");
    }
  });
});
