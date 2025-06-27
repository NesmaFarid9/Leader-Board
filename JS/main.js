  window.addEventListener('DOMContentLoaded', function () {
    const sound = document.getElementById("sound");
   document.body.addEventListener("click", function startSound() {
    sound.play();
    document.body.removeEventListener("click", startSound);
  });
  });

// Fireworks Animation
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles = [];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createFirework(x, y) {
      for (let i = 0; i < 60; i++) {
        particles.push({
          x, y,
          radius: random(1, 3),
          angle: random(0, 2 * Math.PI),
          speed: random(2, 8),
          alpha: 1,
          decay: random(0.01, 0.02),
          color: `hsl(${Math.floor(random(0, 360))}, 100%, 60%)`
        });
      }
    }

    function animate() {
      // ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillStyle = "#00214C";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 0.3;
        p.alpha -= p.decay;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const rgb = p.color.match(/\d+/g);
        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${p.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    }

    setInterval(() => {
      createFirework(random(100, w - 100), random(100, h / 2));
    }, 700);

    animate();

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;});
