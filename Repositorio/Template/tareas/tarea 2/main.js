const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Lista de colores para seleccionar aleatoriamente
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];

// Clase que representa un círculo
class Circle {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  // Dibujar el círculo
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // Actualizar la posición del círculo
  update() {
    // Rebotar en los bordes
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Array que almacena los círculos
let circles = [];

// Función para inicializar los círculos
function init() {
  circles = [];
  for (let i = 0; i < 50; i++) { // Crear 50 círculos
    let radius = Math.random() * 20 + 10;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    let color = colors[Math.floor(Math.random() * colors.length)];

    // Crear y agregar el círculo al array
    circles.push(new Circle(x, y, radius, dx, dy, color));
  }
}

// Función para animar los círculos
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Actualizar y dibujar cada círculo
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
}

// Iniciar la animación
init();
animate();

// Ajustar el tamaño del canvas cuando se redimensiona la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init(); // Volver a crear los círculos para ajustarse al nuevo tamaño
});
