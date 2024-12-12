document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const frame = document.querySelector('.frame');
    const scrollMessage = document.querySelector('.text');
    const bgMusic = document.getElementById('bgMusic');

    // When the button is clicked
    startButton.addEventListener('click', function () {
        // Start playing the background music
        bgMusic.loop = true;
        bgMusic.play();        

        // Hide the button
        startButton.style.display = 'none';

        // Show the frame with the message
        frame.style.display = 'block';

        // Make sure the fade-in effect is triggered
        frame.style.animation = 'fade 2s ease-in forwards';  
                  
    });
});

