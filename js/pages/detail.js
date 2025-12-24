import {detailItem, itemImage} from '../data/mock.js';

const params = new URLSearchParams(location.search);
const id = params.get('id');

console.log('商品ID:', id);

// お気に入りボタン
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.action-btn.favorite');
  if (!btn) return;

  const icon = btn.querySelector('.favorite-icon');
  if (!icon) return;

  icon.classList.toggle('active');
});

// リンクコピー
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("shareBtn");
  const toast = document.getElementById("toast");

  if (!shareBtn || !toast) return;

  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 1500);

    } catch (e) {
      alert("コピーに失敗しました");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-info-section");

  container.insertAdjacentHTML(
    "afterbegin",
    `
      <h1 class="product-title">${detailItem.title}</h1>

      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">発売元</div>
          <div class="info-value">${detailItem.maker}</div>
        </div>

        <div class="info-item">
          <div class="info-label">発売日</div>
          <div class="info-value">${detailItem.releaseDate}</div>
        </div>

        <div class="info-item">
          <div class="info-label">価格</div>
          <div class="info-value price">¥${detailItem.price}</div>
        </div>

        <div class="info-item">
          <div class="info-label">種類数</div>
          <div class="info-value">全${detailItem.count}種類</div>
        </div>

        <div class="info-item">
          <div class="info-label">商品タイプ</div>
          <div class="info-value">${detailItem.type}</div>
        </div>
      </div>
    `
  );
});


const imageContainer = document.querySelector("#product-image");

imageContainer.insertAdjacentHTML(
  "afterbegin",
  `
    <div class="placeholder-img"
         style="background: ${itemImage.background};">
    </div>
  `
);
