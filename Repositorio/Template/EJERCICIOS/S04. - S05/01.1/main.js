/*///// Código del ejercicio anterior (S05. Ex.01.) ///*/
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D



/*///// 1. Definir la posicion del rectángulo que vamos a dibujar como una variable para que sea modificada en cada "frame" y creemos la ilusión de animación. ///*/
let offsetX = 0;



/*///// 2. Definir funcion a repetir usando requestAnimationFrame() ///*/
function renderRectangle() {

  /*///// 3. Limpiar el canvas antes de dibujar (nuevamente) sobre él ///*/
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  // Sintaxis de la función: clearRect(x, y, width, height).
  // Mas info sobre la función: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect

  CTX.fillStyle = "aqua";
  CTX.fillRect(offsetX, 10, 150, 100);
  
  /*///// 4. Calcular la nueva posicion en x "offsetX" para que en el siguiente frame tenga una posición distinta creando movimiento ///*/
  offsetX = offsetX + 1;
  
  /*///// 5. Invocar la función requestAnimationFrame() usando como callback esta misma función para generar la "recursión" o "bucle" que da la ilusión de movimiento o animación. ///*/
  requestAnimationFrame(renderRectangle);
}



/*///// 6. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderRectangle);
