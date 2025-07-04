// const canvas = document.getElementById('flame-canvas');
// const ctx = canvas.getContext('2d');

// canvas.width = 220;
// canvas.height = 80;

// let particles = [];

// function createParticle(x, y) {
//   return {
//     x,
//     y,
//     vx: (Math.random() - 0.5) * 1,
//     vy: -Math.random() * 2,
//     life: 60,
//     size: Math.random() * 3 + 2,
//     color: `rgba(255, ${Math.floor(Math.random() * 100)}, 0, 0.6)`
//   };
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   particles = particles.filter(p => p.life > 0);

//   for (let p of particles) {
//     p.x += p.vx;
//     p.y += p.vy;
//     p.life--;

//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//     ctx.fillStyle = p.color;
//     ctx.fill();
//   }

//   requestAnimationFrame(animate);
// }

// canvas.addEventListener('mousemove', (e) => {
//   const rect = canvas.getBoundingClientRect();
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   for (let i = 0; i < 3; i++) {
//     particles.push(createParticle(x, y));
//   }
// });

// animate();
