document.addEventListener('click', (e) => {
  const heart = e.target.closest('.heart-icon');
  if (!heart) return;

  e.stopPropagation();

  // ハートのトグル
  heart.classList.toggle('active');

  // 商品ID取得
  const card = heart.closest('.card'); 
  const id = card?.dataset.id;

  // localStorage からお気に入りID取得
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (heart.classList.contains('active')) {
    if (!favorites.includes(id)) favorites.push(id);
  } else {
    favorites = favorites.filter(fav => fav !== id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
});

// ページ読み込み時に favorites にある商品は active にする
window.addEventListener('DOMContentLoaded', () => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  favorites.forEach(id => {
    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (card) {
      const heart = card.querySelector('.heart-icon');
      if (heart) heart.classList.add('active');
    }
  });
});
