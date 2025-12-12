document.querySelectorAll('.heart-icon').forEach(heart => {
    heart.addEventListener('click', function(e) {
        e.stopPropagation();
        if (this.textContent === '♡') {
            this.textContent = '♥';
            this.style.color = '#ff3333';
        } else {
            this.textContent = '♡';
            this.style.color = '#333';
        }
    });
});

// 週計算(今日から４週間分を求める)
function getWeekInfo(date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const week = Math.ceil((date.getDate() + firstDay) / 7);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    week
  };
}

function generateWeeks() {
  const result = [];
  let current = new Date();

  for (let i = 0; i < 4; i++) {
    const info = getWeekInfo(current);
    result.push(`${info.month}月第${info.week}週より`);
    current.setDate(current.getDate() + 7);
  }

  return result;
}

document.addEventListener("DOMContentLoaded", () => {
  const weeks = generateWeeks();
  const elements = document.querySelectorAll(".week-label");

  elements.forEach((el, index) => {
    if (weeks[index]) {
      el.textContent = weeks[index];
    }
  });
});
