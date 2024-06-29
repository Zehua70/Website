// use id (#sample) from HTML to declare new variable
var dino = document.querySelector("#dino");
var obstacle = document.querySelector("#obstacle");
var floor = document.querySelector("#floor");
var cloud = document.querySelector("#cloud");
var gameStart = document.querySelector("#gameStart");
var gameOver = document.querySelector("#gameOver");




//start Game
// This game only start when a key (w) is pressed
window.addEventListener("keydown", function(start)
{
    
    // Check if the key pressed is "w" (KeyW)
    if (start.code == "KeyW")
    {
        // Hide the game over&& game start message
        gameOver.style.display = "none";
        gameStart.style.display = "none";
        
        // Add the "obstacleActive" class to the obstacle
        obstacle.classList.add("obstacleActive");
        
        // Start the animation for the floor
        floor.firstElementChild.style.animation = "floorAnimate 1.5s linear infinite";
        
        // Start the animation for the cloud
        cloud.firstElementChild.style.animation = "cloudAnimate 10s linear infinite";
    }
});


// When w pressed, jump animation start
window.addEventListener("keydown", function(jump)
{

    // Check if "w" is pressed
    if (jump.key == "w") {
        //if the 'dino' element dont have the class 'dinoActive'
        if (!dino.classList.contains("dinoActive"))
        {
            // add the class 'dinoActive' to it.
            dino.classList.add("dinoActive");

            // After 0.5 seconds, remove the class 'dinoActive', so animation is stop player back to the ground.
            setTimeout(function()
            {
                dino.classList.remove("dinoActive");
            }, 500);
        }
    }
});

// this interval will check every 10 milliseconds
var result = setInterval(function()
{
    // Get the current value of the "bottom" CSS
    var dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));

    // Get the current value of the "left" CSS
    var obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("left"));

    // Check if dino has collided with the obstacle
    // If dino is positioned below 90 from the bottom and obstacle is horizontally between 20 and 145 from the left edge, it means they are too close or alr collided.
    if (dinoBottom <= 90 && obstacleLeft >= 20 && obstacleLeft <= 145)
    {
        // Display the "Game Over"
        gameOver.style.display = "block";

        // Remove "obstacleActive" to stop the animation
        obstacle.classList.remove("obstacleActive");

        // Stop the animation for floor and cloud (set the 'animation' to "none")
        floor.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
    }
}, 10);


