const canvas = document.getElementById('fluid');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let trails = [];
let colorShift = 0;

canvas.style.pointerEvents = 'none'; // Let mouse events pass through

document.addEventListener('mousemove', (e) => {
  colorShift += 10; // Change this for faster/slower color cycling
  const hue = (colorShift % 360);
  trails.push({
    x: e.clientX,
    y: e.clientY,
    alpha: 1,
    radius: 30 + Math.random() * 20,
    color: `hsla(${hue}, 100%, 60%, 0.6)` // Vibrant, semi-transparent
  });
});

function drawSmoke() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  trails.forEach((trail, i) => {
    ctx.save();
    ctx.globalAlpha = trail.alpha;
    let grad = ctx.createRadialGradient(trail.x, trail.y, 0, trail.x, trail.y, trail.radius);
    grad.addColorStop(0, trail.color);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(trail.x, trail.y, trail.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    trail.alpha -= 0.02;
    trail.radius += 0.5;
    if (trail.alpha <= 0) trails.splice(i, 1);
  });
  requestAnimationFrame(drawSmoke);
}
drawSmoke();