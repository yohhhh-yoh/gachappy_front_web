// mockデータのインポート
import {rankingData} from '../data/mock.js';


// 表示ランキングの切り替え
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// ランキングの表示
const rankingList = document.getElementById('rankingList');

rankingData.forEach((item, index) => {
  const rank = index + 1;

  const topRankClass = rank <= 3
    ? `top-rank rank-${rank}`
    : '';

  rankingList.insertAdjacentHTML('beforeend', `
    <div class="rank-item ${topRankClass}">
      <div class="rank-number">${rank}</div>

      <div class="card card-horizontal">
        <div class="placeholder-img" style="background: ${item.bg}"></div>

        <div class="card-content">
          <div class="card-title">
            <div class="card-title-text">${item.title}</div>
            <div class="heart-icon">♡</div>
          </div>

          <div class="card-subtitle">${item.maker}</div>
          <div class="card-price">${item.price}</div>
        </div>
      </div>
    </div>
    `
  );
});


