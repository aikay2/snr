// document.addEventListener('DOMContentLoaded', function () {
//     const startButton = document.getElementById('startButton');
//     const frame = document.querySelector('.frame');
//     const scrollMessage = document.querySelector('.text');
//     const bgMusic = document.getElementById('bgMusic');

//     // When the button is clicked
//     startButton.addEventListener('click', function () {
//         // Trigger the animation for the message to scroll
//         scrollMessage.style.animationPlayState = 'running';  // Start scrolling
//         // Start playing the background music
//         bgMusic.loop = true;
//         bgMusic.play();  
        

//         // Hide the button
//         startButton.style.display = 'none';

//         // Show the frame with the message
//         frame.style.display = 'block';

//         // Make sure the fade-in effect is triggered
//         frame.style.animation = 'fade 2s ease-in forwards';  
                  
//     });
// });


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

        // Show the frame with the message and trigger fade-in animation
        frame.style.display = 'block';
        frame.style.animation = 'fade 2s ease-in forwards';

        // Start scrolling text after the fade-in animation completes
        setTimeout(() => {
            scrollMessage.style.animationPlayState = 'running';
        }, 2000); // 2 seconds for fade animation
    });
});
