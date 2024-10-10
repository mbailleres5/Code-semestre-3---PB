const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Ajustar tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Lista de colores para elegir aleatoriamente
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];

// Crear una lista de círculos
let circles = [];

// Función para generar un círculo
function createCircle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 20 + 10,
    dx: (Math.random() - 0.5) * 4,
    dy: (Math.random() - 0.5) * 4,
    color: colors[Math.floor(Math.random() * colors.length)]
  };
}

// Inicializar círculos
for (let i = 0; i < 30; i++) {
  circles.push(createCircle());
}

// Función para actualizar la posición y evitar que el círculo salga del canvas
function updateCircle(circle) {
  // Rebotar en los bordes
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
  }
  if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
    circle.dy = -circle.dy;
  }

  // Actualizar posición
  circle.x += circle.dx;
  circle.y += circle.dy;
}

// Función para dibujar los círculos
function drawCircle(circle) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = circle.color;
  ctx.fill();
  ctx.closePath();
}

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar y actualizar cada círculo
  circles.forEach(circle => {
    drawCircle(circle);
    updateCircle(circle);
  });
}

// Comenzar la animación
animate();

// Ajustar el tamaño del canvas cuando se redimensiona la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
