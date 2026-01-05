// mockデータのインポート
import { weeklyData } from '../data/mock.js';

// 発売スケジュールの表示処理
const weeklyContainer = document.getElementById('weekly-sections');
weeklyData.weeks.forEach(weekData => {
  // 各週のセクションを生成
  weeklyContainer.insertAdjacentHTML('beforeend', `
    <div class="section">
      <div class="section-header">
        <div class="section-title">${weekData.month}月${weekData.week}週より</div>
      </div>
      <div class="card-grid" id="week-${weekData.week}"></div>
    </div>
  `);

  const grid = document.getElementById(`week-${weekData.week}`);

  // 週の中の商品を生成
  weekData.items.forEach(card => {
    grid.insertAdjacentHTML('beforeend', `
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