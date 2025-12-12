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