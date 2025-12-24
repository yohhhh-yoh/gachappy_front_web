// お気に入りボタン

document.addEventListener('click', (e) => {
  const heart = e.target.closest('.heart-icon');
  if (!heart) return;

  e.stopPropagation();

  heart.classList.toggle('active');
});

