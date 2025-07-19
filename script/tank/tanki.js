const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 200, dx = 2;

//? картинки
//* картинка игрока
player_image = new Image()
player_image.src = 'image/unnamed.png'

//* картинка врага
vrag_image = new Image()
vrag_image.src = 'image/4bf82c3946e82c7.png'

//* картинка пули
bullet_image = new Image()
bullet_image.src = 'image/New Piskel.png'

//? вражеский танк 1
function moveRect() {
    ctx.clearRect(0, 0, 1000, 700)
    ctx.drawImage(vrag_image, x, 200, 50, 50)
    x += dx;
    // requestAnimationFrame(moveRect)
    if (x >= canvas.width || x <= 0) {
        dx = -dx
    }
}

//? вражеский танк 2
function moveRect1() {
    ctx.drawImage(vrag_image, 200, x, 50, 50)
    x += dx;
    if (x >= canvas.width || x <= 0) {
        dx = -dx
    }
}

//? словарь Игрок
player = {
    x: 400,
    y: 330,
    w: 50,
    h: 50,
    speed: 5,
    dx: 0,
    dy: 0,
    texture: player_image
}

//? restart
//* restart на кнопку
const button = document.getElementById('Button');
button.addEventListener('click', function () {
    window.location.reload();
    console.log('Game restart');
});

//* restart на R
document.addEventListener('keypress', function (event) {
    if (event.code == 'KeyR') {
        window.location.reload();
        console.log('Game restart');
    }
});

//? Управление персонажем
//* управление стрелками
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

//* управление WASD
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

//? колизии
let stop = false;
function collision() {
    //* если игрок касается врага
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

    //* если пуля касается врага
    if (bullet.x >= x && bullet.x <= x + 50 && bullet.y >= 200 && bullet.y <= 260) {
        document.body.style.backgroundColor = 'green';
        player.dx = 0;
        player.dy = 0;
        x = 0;
        stop = true;
        ctx.font = '48px JetBrains Mono'
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText('you win', 400, 350)
    }
}

//? параметры пули
bullet = {
    x: -10,
    y: -10,
    speed: 5,
    // image: 'New Piskel.png'
}

function move_bullet() {
    ctx.drawImage(bullet_image, bullet.x, bullet.y, 15, 15);
    bullet.y -= bullet.speed
}

//? стрельба
//* выстрел на пробел
document.addEventListener('keydown', function (event) {
    if (event.code == 'Space') {
        bullet.x = player.x;
        bullet.y = player.y;
        ctx.drawImage(bullet_image, player.x, player.y, 15, 15);
    }
})

//* выстрел на ЛКМ
canvas.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'green'
    bullet.x = player.x;
    bullet.y = player.y;
    ctx.drawImage(bullet_image, player.x, player.y, 15, 15);
});

//? запуск игры на сайте
function game() {
    if (stop == false) {
        moveRect();
        moveRect1();
        drawPleyer()
    }
    collision();
    move_bullet();
    requestAnimationFrame(game)
}
game();
