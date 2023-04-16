// Get the canvas element
const canvas = document.getElementById("game-canvas");

// Set the canvas width and height
canvas.width = 800;
canvas.height = 600;

// Get the canvas context
const ctx = canvas.getContext("2d");

// Set the game loop interval
const gameLoopInterval = 1000 / 60; // 60 FPS

// Define the game state
let playerX = canvas.width / 2;
let playerY = canvas.height - 50;
let playerSpeed = 5;

let enemyX = canvas.width / 2;
let enemyY = 50;
let enemySpeed = 2;

let score = 0;

// Define the game loop function
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update the game state
    playerX += playerSpeed;
    if (playerX < 0 || playerX > canvas.width) {
        playerSpeed = -playerSpeed;
    }

    enemyY += enemySpeed;
    if (enemyY > canvas.height) {
        enemyX = Math.random() * canvas.width;
        enemyY = 50;
        score++;
    }

    // Check for collisions
    const distance = Math.sqrt((playerX - enemyX) ** 2 + (playerY - enemyY) ** 2);
    if (distance < 50) {
        alert(`Game over! Your score was ${score}`);
        document.location.reload();
    }

    // Draw the game objects
    ctx.fillStyle = "blue";
    ctx.fillRect(playerX - 25, playerY - 25, 50, 50);

    ctx.fillStyle = "red";
    ctx.fillRect(enemyX - 25, enemyY - 25, 50, 50);

    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${score}`, 10, 30);

    // Schedule the next game loop iteration
    setTimeout(gameLoop, gameLoopInterval);
}

// Start the game loop
gameLoop();