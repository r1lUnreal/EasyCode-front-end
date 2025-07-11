const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 200, dx = 2;

// картинка игрока
player_image = new Image()
player_image.src = 'image/unnamed.png'

// картинка врага
vrag_image = new Image()
vrag_image.src = 'image/4bf82c3946e82c7.png'

// вражеский танк 1
function moveRect() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.drawImage(vrag_image, x, 200, 50, 50)
    x += dx;
    // requestAnimationFrame(moveRect)
    if (x >= canvas.width || x <= 0) {
        dx = -dx
    }
}

// вражеский танк 2
function moveRect1() {
    ctx.drawImage(vrag_image, 200, x, 50, 50)
    x += dx;
    if (x >= canvas.width || x <= 0) {
        dx = -dx
    }
}

// moveRect()
// словарь Игрок
player = {
    x: 400,
    y: 250,
    w: 50,
    h: 50,
    speed: 5,
    dx: 0,
    dy: 0,
    texture: player_image
}

// restart
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyR') {
        window.location.reload();
    }
});

// управление стрелками
document.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowUp') {
        player.dy = -player.speed
    }
    else if (event.key == 'ArrowDown') {
        player.dy = player.speed
    }
    else if (event.key == 'ArrowRight') {
        player.dx = player.speed
    }
    else if (event.key == 'ArrowLeft') {
        player.dx = -player.speed
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key == 'ArrowUp' || event.key == 'ArrowDown') {
        player.dy = 0
    }
    else if (event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
        player.dx = 0
    }
});

// управление WASD
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyW') {
        player.dy = -player.speed
    }
    else if (event.code == 'KeyA') {
        player.dx = -player.speed
    }
    else if (event.code == 'KeyS') {
        player.dy = player.speed
    }
    else if (event.code == 'KeyD') {
        player.dx = player.speed
    }
});

document.addEventListener('keyup', function (event) {
    if (event.code == 'KeyW' || event.code == 'KeyS') {
        player.dy = 0
    }
    else if (event.code == 'KeyA' || event.code == 'KeyD') {
        player.dx = 0
    }
});

function drawPleyer() {
    // ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.drawImage(player.texture, player.x, player.y, player.w, player.h)
    player.x += player.dx
    player.y += player.dy
}

let stop = false;
function collision() {
    if (player.x >= x && player.x <= x + 50 && player.y >= 200 && player.y <= 260) {
        document.body.style.backgroundColor = 'red';
        player.dx = 0;
        player.dy = 0;
        x = 0;
        stop = true;
        ctx.font = '48px JetBrains Mono'
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText('you dead', 400, 350)
    }
}

function game() {
    if (stop == false) {
        moveRect();
        moveRect1();
        drawPleyer()
    }
    collision();
    requestAnimationFrame(game)
}
game();

//! Продал бомжа
