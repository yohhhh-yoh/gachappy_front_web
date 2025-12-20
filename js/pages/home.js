// mockデータのインポート
import { todayCards, weeklyData } from '../data/mock.js';

// 本日発売商品の表示
const container = document.getElementById('today-release');

todayCards.forEach(card => {
  container.insertAdjacentHTML('beforeend', `
    <div class="card">
      <div class="placeholder-img" style="background: ${card.bg};"></div>
      <div class="card-content">
        <div class="card-title">
          <div class="card-title-text">${card.title}</div>
          <div class="heart-icon">♡</div>
        </div>
        <div class="card-subtitle">${card.maker}</div>
        <div class="card-price">${card.price}</div>
      </div>
    </div>
  `);
});


// 発売スケジュールの表示処理
const weeklyContainer = document.getElementById('weekly-sections');
weeklyData.weeks.forEach(weekData => {
  // 各週のセクションを生成
  weeklyContainer.insertAdjacentHTML('beforeend', `
    <div class="section">
      <div class="section-header">
        <div class="section-title">${weekData.month}月${weekData.week}週より</div>
        <a href="#" class="view-all">すべてを見る →</a>
      </div>
      <div class="card-grid" id="week-${weekData.week}"></div>
    </div>
  `);

  const grid = document.getElementById(`week-${weekData.week}`);

  // 週の中の商品を生成
  weekData.items.forEach(card => {
    grid.insertAdjacentHTML('beforeend', `
      <div class="card">
        <div class="placeholder-img" style="background: ${card.bg};"></div>
        <div class="card-content">
          <div class="card-title">
            <div class="card-title-text">${card.title}</div>
            <div class="heart-icon">♡</div>
          </div>
          <div class="card-subtitle">${card.maker}</div>
          <div class="card-price">${card.price}</div>
        </div>
      </div>
    `);
  });
});
