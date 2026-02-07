setInterval(() => {
  const bonus = document.createElement("div");
  bonus.className = "flying-bonus";
  bonus.textContent = "🎁 +FS";
  bonus.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(bonus);

  setTimeout(() => {
    bonus.remove();
  }, 3000);
}, 700);
