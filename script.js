var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var frog = new Image(); frog.src = "frogger.png";
var sx = 0;
var sy = 0;
var swidth = 40;
var sheight = 40;
var x = 50;
var y = 444;
var width = 30;
var height = 30;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var up = true;
var down = true;
var right = true;
var left = true;

var car = new Image(); car.src = "froggercars.png";
var carX1= 100;
var carSX1 = 0;
var carY1 = 400;
var carWidth = 60;
var carHeight = 35;
var carX2 = 500;
var carSX2 = 60;
var carY2 = 400;
var carX3 = 460;
var carSX3 = 120;
var carY3 = 355;
var carX4 = 400;
var carSX4 = 180;
var carY4 = 310;
var carX5 = 360;
var carSX5 = 0;
var carY5 = 265;
var carX6 = 60;
var carSX6 = 120;
var carY6 = 355;
var carX7 = 100;
var carSX7 = 180;
var carY7 = 310;
var carX8 = 160;
var carSX8 = 0;
var carY8 = 265;

var logX1 = 300;
var logY1 = 180;
var logWidth = 120;
var logHeight = 30;
var logX2 = 40;
var logY2 = 180;
var logX3 = 100;
var logY3 = 136;
var logX4 = 400;
var logY4 = 136;
var logX5 = 480;
var logY5 = 92;
var logX6 = 60;
var logY6 = 92;
var logX7 = 120;
var logY7 = 48;
var logX8 = 500;
var logY8 = 48;

var padWidth = 30;
var padHeight = 30;
var padX1 = 20;
var padY1 = 4;
var padX2 = 120;
var padY2 = 4;
var padX3 = 220;
var padY3 = 4;
var padX4 = 320;
var padY4 = 4;
var padX5 = 420;
var padY5 = 4;
var padX6 = 520;
var padY6 = 4;

var pad1 = false;
var pad2 = false;
var pad3 = false;
var pad4 = false;
var pad5 = false;
var pad6 = false;

var lives = 3;
var livesLost = 0;
var play = true;
var victoryCondition = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    if (e.keyCode == 37) {
        leftPressed = true;
    }
    if (e.keyCode == 38) {
        upPressed = true;
    }
    if (e.keyCode == 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    if (e.keyCode == 37) {
        leftPressed = false;
    }
    if (e.keyCode == 38) {
        upPressed = false;
    }
    if (e.keyCode == 40) {
        downPressed = false;
    }
}

function drawBackground() {
    // drawing two strips of grass
    ctx.fillStyle = "lime";
    ctx.fillRect(0, 440, 570, 45);
    ctx.fillRect(0, 220, 570, 45);

    ctx.beginPath();
    ctx.moveTo(0, 395);
    ctx.lineTo(570, 395);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(570, 350);
    ctx.strokeStyle = "white";
    ctx.setLineDash([0]);
    ctx.strokeWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 305);
    ctx.lineTo(570, 305);
    ctx.strokeStyle = "white";
    ctx.setLineDash([5]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    // drawing water
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 570, 220);
}

function drawFrog() {
    ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

function moveFrog() {
    if (upPressed == true && up == true && y > 20) {
        y = y - 44;
        up = false;
        sx = 0;
    }

    if (upPressed == false) {
        up = true;
    }

    if (downPressed == true && down == true && y + height < canvas.height - 80) {
        y = y + 44;
        down = false;
        sx = 0;
    }

    if (downPressed == false) {
        down = true;
    }

    if (rightPressed == true && right == true && x + width < canvas.width - 20) {
        x = x + 44;
        right = false;
        sx = 40;
    }

    if (rightPressed == false) {
        right = true;
    }

    if (leftPressed == true && left == true && x > 20) {
        x = x - 44;
        left = false;
        sx = 80;
    }

    if (leftPressed == false) {
        left = true;
    }
}

function drawCars() {
    var carsSX = [carSX1, carSX2, carSX3, carSX4, carSX5, carSX6, carSX7, carSX8];
    var carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
    var carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

    for (i = 0; i < carsX.length; i++) {
        ctx.drawImage(car, carsSX[i], 0, 60, 35, carsX[i], carsY[i], carWidth, carHeight);
    }

}

function moveCars() {
    if (carX1 < canvas.width + 100) {
        carX1 = carX1 + 5;
    } else {
        carX1 = -100;
        carSX1 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX2 < canvas.width + 100) {
        carX2 = carX2 + 5;
    } else {
        carX2 = -100;
        carSX2 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX3 > -100) {
        carX3 = carX3 - 5;
    } else {
        carX3 = canvas.width + 100;
        carSX3 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX6 > -100) {
        carX6 = carX6 - 5;
    } else {
        carX6 = canvas.width + 100;
        carSX6 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX4 < canvas.width + 100) {
        carX4 = carX4 + 5;
    } else {
        carX4 = -100;
        carSX4 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX7 < canvas.width + 100) {
        carX7 = carX7 + 5;
    } else {
        carX7 = -100;
        carSX7 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX5 > - 100) {
        carX5 = carX5 - 5;
    } else {
        carX5 = canvas.width + 100;
        carSX5 = (Math.floor(Math.random() * 4)) * 60;
    }

    if (carX8 > - 100) {
        carX8 = carX8 - 5;
    } else {
        carX8 = canvas.width + 100;
        carSX8 = (Math.floor(Math.random() * 4)) * 60;
    }
}

function runOver() {
    var carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
    var carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

    for (i = 0; i < carsX.length; i++) {
        if (carsX[i] <= x + width && 
            carsX[i] + carWidth >= x && 
            carsY[i] + carHeight >= y && 
            carsY[i] <= y + height) {
            y = 488;
            livesLost++;
        }
    }
}

function drawLogs() {
    ctx.fillStyle = "tan";
    var logsX = [logX1, logX2, logX3, logX4, logX5, logX6, logX7, logX8];
    var logsY = [logY1, logY2, logY3, logY4, logY5, logY6, logY7, logY8];

    for (i = 0; i < logsX.length; i++) {
        ctx.fillRect(logsX[i], logsY[i], logWidth, logHeight);
    }
}

function moveLogs() {
    if (logX1 < canvas.width + 100) {
        logX1 = logX1 + 2;
    } else {
        logX1 = -100;
    }

    if (logX2 < canvas.width + 100) {
        logX2 = logX2 + 2;
    } else {
        logX2 = -100;
    }

    if (logX3 > 0 - logWidth) {
        logX3 = logX3 - 2;
    } else {
        logX3 = canvas.width + 100;
    }

    if (logX4 > 0 - logWidth) {
        logX4 = logX4 - 2;
    } else {
        logX4 = canvas.width + 100;
    }

    if (logX5 < canvas.width + 100) {
        logX5 = logX5 + 3;
    } else {
        logX5 = -100;
    }

    if (logX6 < canvas.width + 100) {
        logX6 = logX6 + 3;
    } else {
        logX6 = -100;
    }

    if (logX7 > 0 - logWidth) {
        logX7 = logX7 - 2;
    } else {
        logX7 = canvas.width + 100;
    }

    if (logX8 > 0 - logWidth) {
        logX8 = logX8 - 2;
    } else {
        logX8 = canvas.width + 100;
    }
}

function float() {
    if (logX1 <= x + width && 
        logX1 + logWidth >= x && 
        logY1 + logHeight >= y && 
        logY1 <= y + height) {
        if (x < canvas.width - 30) {
            x = x + 2;
        }
    } else if (logX2 <= x + width && 
                logX2 + logWidth >= x && 
                logY2 + logHeight >= y && 
                logY2 <= y + height) {
        if (x < canvas.width - 30) {
            x = x + 2;
        }
    } else if (logX3 <= x + width && 
                logX3 + logWidth >= x && 
                logY3 + logHeight >= y && 
                logY3 <= y + height) {
        if (x > 0) {
            x = x - 2;
        }
    } else if (logX4 <= + width && 
                logX4 + logWidth >= x && 
                logY4 + logWidth >= y && 
                logY4 <= y + height) {
        if (x > 0) {
            x = x - 2;
        }
    } else if (logX5 <= x + width && 
                logX5 + logWidth >= x && 
                logY5 + logHeight >= y && 
                logY5 <= y + height) {
        if (x < canvas.width - 30) {
            x = x + 3;
        }
    } else if (logX6 <= x + width && 
                logX6 + logWidth >= x && 
                logY6 + logHeight >= y && 
                logY6 <= y + height) {
        if (x < canvas.width - 30) {
            x = x + 3;
        }
    } else if (logX7 <= x + width && 
                logX7 + logWidth >= x && 
                logY7 + logHeight >= y && 
                logY7 <= y + height) {
        if (x > 0) {
            x = x - 2;
        }
    } else if (logX8 <= x + width && 
                logX8 + logWidth >= x && 
                logY8 + logHeight >= y && 
                logY8 <= y + height) {
        if (x > 0) {
            x = x - 2;
        }
    } else if (y < 220 && y > 44) {
        y = 488;
        livesLost ++;
    }
}

function drawPads() {
    ctx.fillStyle = "seagreen";
    var padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
    var padsY = [padY1, padY2, padY3, padY4, padY5, padY6];

    for (i = 0; i < padsX.length; i++) {
        ctx.fillRect(padsX[i], padsY[i], padWidth, padHeight);
    }
}

function onPad() {
    if (padX1 <= x + width && 
        padX1 + padWidth >= x && 
        padY1 + padHeight >= y && 
        padY1 <= y + height) {
            pad1 = true;
            y = 488;
    } else if (pad2 <= x + width && 
                padX2 + padWidth >= x && 
                padY2 + padHeight >= y && 
                padY2 <= y + height) {
                    pad2 = true;
                    y = 488;
    } else if (padX3 <= x + width &&
                padX3 + padWidth >= x &&
                padY3 + padHeight >= y &&
                padY3 <= y + height) {
                    pad3 = true;
                    y = 488;
    } else if (padX4 <= x + width &&
                padX4 + padWidth >= x &&
                padY4 + padHeight >= y &&
                padY4 <= y + height) {
                    pad4 = true;
                    y = 488;
    } else if (padX5 <= x + width &&
                padX5 + padWidth >= x &&
                padY5 + padHeight >= y &&
                padY5 <= y + height) {
                    pad5 = true;
                    y = 488;
    } else if (padX6 <= x + width &&
                padX6 + padWidth >= x &&
                padY6 + padHeight >= y &&
                padY6 <= y + height) {
                    pad6 = true;
                    y = 488;
    } else if (y < 48) {
        y = 488;
        livesLost++;
    } 

    var pads = [pad1, pad2, pad3, pad4, pad5, pad6];
    var padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
    var padsY = [padY1, padY2, padY3, padY4, padY5, padY6];

    for (i = 0; i < pads.length; i++) {
        if (pads[i] === true) {
            ctx.drawImage(frog, 0, 0, 40, 40, padsX[i], padsY[i], 30, 30);
        }
    }
}

function drawLives() {
    // count and display lives left
    if (lives - livesLost != 0) {
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("LIVES: " + (lives - livesLost), (canvas.width/2) - 70, 525);
    }
}

function victory() {
    if (pad1 && pad2 && pad3 && pad4 && pad5 && pad6) {
        // print "You Won!" at (220, 488)
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText("You Won!", (canvas.width/2)-60, 525);
        victoryCondition = true;
    }
}

function gameOver() {
    // end game if they run out of lives
    if (lives - livesLost == 0) {
        play = false;
        ctx.fillStyle = "white";
        ctx.font = "72px Arial";
        ctx.fillText("GAME OVER", 0, 100);
        ctx.font = "28px Arial";
        ctx.fillText("Refresh to try again!", 50, 150);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (victoryCondition === false) {
        gameOver();
        drawLives();
    }

    if (play) {
        drawBackground();
        drawLogs();
        moveLogs();
        drawPads();
        onPad();
        drawFrog();
        moveFrog();
        drawCars();
        moveCars();
        runOver();
        float();
    }

    requestAnimationFrame(draw);
}

draw();