const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 200, dx = 2;

function moveRect() {
    ctx.clearRect(0, 0, 800, 500)
    ctx.fillRect(x, 200, 60, 40)
    x += dx;
    // requestAnimationFrame(moveRect)
    if (x >= canvas.width || x <= 0) {
        dx = -dx
    }
}

function moveRect1() {
    ctx.fillRect(200, x, 40, 60)
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
    dy: 0
}

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
    ctx.fillRect(player.x, player.y, player.w, player.h);
    player.x += player.dx
    player.y += player.dy
}

function game() {
    moveRect();
    moveRect1();
    drawPleyer()
    requestAnimationFrame(game)
}
game();
