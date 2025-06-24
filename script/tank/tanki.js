const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// //* квадрат -_-
// //? ctx.fillRect(x, y, ширина, высота);
// ctx.fillRect(400, 200, 50, 60);
// ctx.fillStyle = 'red' // цвет
// ctx.strokeRect(500, 300, 70, 60)
// ctx.strokeStyle = 'green' // цвет контура
// ctx.fillRect(350, 200, 50, 60);
// ctx.fillStyle = 'yellow'
// ctx.fillRect(375, 200, 50, 200);

// // очистка
// // ctx.clearRect(0, 0, 800, 500)

// // линии
// ctx.beginPath();
// ctx.moveTo(150, 20);
// ctx.lineTo(180, 120);
// ctx.lineTo(280, 120);
// ctx.lineTo(200, 180);
// ctx.lineTo(230, 280);
// ctx.lineTo(150, 220);
// ctx.lineTo(70, 280);
// ctx.lineTo(100, 180);
// ctx.lineTo(20, 120);
// ctx.lineTo(120, 120);
// ctx.closePath();
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(300, 10);
// ctx.lineTo(300, 80);
// ctx.lineTo(400, 80);
// ctx.lineTo(400, 10);
// ctx.lineTo(450, -10);
// ctx.lineTo(450, 60);
// ctx.lineTo(400, 80);
// ctx.lineTo(400, 10);
// ctx.lineTo(320, 10);
// ctx.lineTo(370, -10);
// ctx.closePath();
// ctx.stroke();


// кривая
// ctx.beginPath();
// ctx.moveTo(250, 300);
// ctx.bezierCurveTo(250, 250, 200, 250, 200, 300);
// ctx.bezierCurveTo(200, 350, 250, 400, 250, 450);
// ctx.bezierCurveTo(250, 400, 300, 350, 300, 300);
// ctx.bezierCurveTo(300, 250, 250, 250, 250, 300);
// ctx.fillStyle = 'pink';
// ctx.fill();
// ctx.stroke();

ctx.beginPath();
ctx.arc(200, 75, 50, 0, Math.PI, true)
ctx.stroke();

