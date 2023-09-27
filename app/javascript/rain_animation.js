// app/javascript/packs/rain_animation.js

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("rainCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let raindrops = [];

  function createRaindrop() {
    const x = Math.random() * canvas.width;
    const y = 0;
    const speed = Math.random() * 1 + 0.3;
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const horizontalSpeed = Math.random() * 0.5 - 0.25; // 新しいプロパティ
    const oscillationSpeed = Math.random() * 2 + 1; // 新しいプロパティ
    raindrops.push({ x, y, speed, color, horizontalSpeed, oscillationSpeed });
  }

  function moveRaindrops() {
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i].y += raindrops[i].speed;
      raindrops[i].x +=
        raindrops[i].horizontalSpeed *
        Math.sin(raindrops[i].oscillationSpeed * raindrops[i].y); // 水平方向の動きを追加
      if (raindrops[i].y > canvas.height) {
        raindrops.splice(i, 1);
        i--;
      }
    }
  }

  function drawRaindrops() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < raindrops.length; i++) {
      ctx.fillStyle = raindrops[i].color;
      ctx.fillRect(raindrops[i].x, raindrops[i].y, 2, 10);
    }
  }

  // function drawRaindrops() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   for (let i = 0; i < raindrops.length; i++) {
  //     ctx.fillStyle = "white"; // 白色に変更
  //     ctx.beginPath();
  //     ctx.arc(raindrops[i].x, raindrops[i].y, 2, 0, Math.PI * 2); // 円を描画
  //     ctx.fill();
  //   }
  // }

  function update() {
    // createRaindrop();
    moveRaindrops();
    drawRaindrops();
    requestAnimationFrame(update);
  }

  // 500ミリ秒ごとに雨粒を生成
  setInterval(createRaindrop, 100);

  update();
});
