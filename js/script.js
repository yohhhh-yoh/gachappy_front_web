document.addEventListener('click', function (e) {
  const heart = e.target.closest('.heart-icon');
  if (!heart) return;

  e.stopPropagation();

  if (heart.textContent === '♡') {
    heart.textContent = '♥';
    heart.style.color = '#ff3333';
  } else {
    heart.textContent = '♡';
    heart.style.color = '#333';
  }
});

//テストデータ
const todayCards = [
  {
    title: '限定コラボガチャキャラクターデザイン',
    brand: 'Adobe Express',
    price: '¥800',
    bg: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)'
  },
  {
    title: '朝倉ころミニフィギュアコース',
    brand: 'Firefly',
    price: '¥600',
    bg: 'linear-gradient(135deg, #87ceeb 0%, #4682b4 100%)'
  }
];

const data = {
  weeks: [
    {
      week: 1,
      items: [
        {
          id: "A",
          title: "商品A",
          brand: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)"
        },
        {
          id: "B",
          title: "商品B",
          brand: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #87ceeb 0%, #4682b4 100%)"
        }
      ]
    },
    {
      week: 2,
      items: [
        {
          id: "C",
          title: "商品C",
          brand: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #fff4e6 0%, #ffd700 100%)"
        },
        {
          id: "D",
          title: "商品D",
          brand: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #e8f5e9 0%, #66bb6a 100%)"
        }
      ]
    }
  ]
};


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
        <div class="card-subtitle">${card.brand}</div>
        <div class="card-price">${card.price}</div>
      </div>
    </div>
  `);
});


// 発売スケジュールの表示処理
const weeklyContainer = document.getElementById('weekly-sections');
data.weeks.forEach(weekData => {
  // 各週のセクションを生成
  weeklyContainer.insertAdjacentHTML('beforeend', `
    <div class="section">
      <div class="section-header">
        <div class="section-title">12月${weekData.week}週</div>
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
