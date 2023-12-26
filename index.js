const canvas = document.getElementById('myCanvas');
const buttonsDiv = document.querySelector('.buttons');
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

let arrayOfMovements = ['Attack', 'Run', 'Slide', 'Jump', 'Throw', 'Jump_Throw', 'Jump_Attack', 'Idle', 'Dead'];
let movementPlayer = {};

let currentInterval;

arrayOfMovements.forEach((movement) => {
    // Create buttons
    let button = document.createElement('button');
    button.textContent = movement;
    buttonsDiv.append(button);

    let images = [];

    for (let i = 0; i < arrayOfMovements.length; i++) {
        let image = new Image();
        let src = `./images/${movement}__00${i}.png`;
        image.src = src;
        images.push(image);
    }
   
    // Store all images for each movement
    movementPlayer[movement] = images;
   
    button.addEventListener('click', () => {
        clearInterval(currentInterval); 
        // Clear the previous interval
        animateMovement(movementPlayer[movement]);
    });
});
animateMovement(movementPlayer['Attack']);
function animateMovement(movementImages) {
    let i = 0;
    currentInterval = setInterval(function () {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate the center position for the image
        const centerX = (canvas.width - 300) / 2;
        const centerY = (canvas.height - 300) / 2;

        // Draw the image at the center position
        ctx.drawImage(movementImages[i], centerX, centerY, 300, 300);

        i++;
        if (i >= movementImages.length) {
            i = 0;
        }
    }, 100);
}
