document.querySelector('.envelope').addEventListener('click', () => {
    document.getElementById('flap').classList.add('open-flap');
    document.getElementById('letter').classList.add('show-letter');
  });
// Add to script.js
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
  
  setInterval(createHeart, 300);
  function updateLoveTime() {
    const startDate = new Date("2025-05-25T00:00:00");
    const now = new Date();
    const diff = now - startDate;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
  
    document.getElementById("loveTime").innerText =
      `❤️ We've been dating for ${days} day(s), ${hours} hour(s), and ${minutes} minute(s)`;
  }
  
  setInterval(updateLoveTime, 1000);
  updateLoveTime();
      