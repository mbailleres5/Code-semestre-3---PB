const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array para almacenar las posiciones anteriores del cursor
let points = [];

// Añadir evento de seguimiento del movimiento del ratón
window.addEventListener('mousemove', (event) => {
  // Almacenar la posición actual del cursor
  const mousePosition = { x: event.clientX, y: event.clientY };
  points.push(mousePosition);

  // Limitar la cantidad de puntos a las últimas 20 posiciones
  if (points.length > 20) {
    points.shift();
  }

  drawLines();
});

function drawLines() {
  // Limpiar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dibujar líneas conectando los puntos en el array
  if (points.length > 1) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    // Configurar el estilo de la línea
    ctx.strokeStyle = '#00ff00'; // Color verde
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

// Actualizar el tamaño del canvas cuando se redimensione la ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  points = []; // Reiniciar los puntos cuando se cambia el tamaño del canvas
});
