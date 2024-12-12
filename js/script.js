// Function to handle the countdown
const handleCountdown = () => {
    const birthday = new Date("2024-12-12T00:00:00").getTime(); // Specify birthday date
    const countdownBox = document.querySelector(".countdown-wrapper");

    function updateCountdown() {
        // Get the current time
        const now = new Date().getTime();
      
        // Calculate the difference between now and the birthday
        const timeRemaining = birthday - now;
      
        // If the birthday has already passed or it's today
        if (timeRemaining <= 0) {
            document.getElementById("days").innerHTML = "0<span class='legend'>Days</span>";
            document.getElementById("hours").innerHTML = "0<span class='legend'>Hours</span>";
            document.getElementById("minutes").innerHTML = "0<span class='legend'>Minutes</span>";
            document.getElementById("seconds").innerHTML = "0<span class='legend'>Seconds</span>";
            document.getElementById("message").innerHTML = "<h2>Happy Birthday <span class='item'>Hilda!<span></h2>";
            document.getElementById("actual").style.display = "block";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
        // Update the countdown elements
        document.getElementById("days").innerHTML = `${days}<span class='legend'>Days</span>`;
        document.getElementById("hours").innerHTML = `${hours}<span class='legend'>Hours</span>`;
        document.getElementById("minutes").innerHTML = `${minutes}<span class='legend'>Minutes</span>`;
        document.getElementById("seconds").innerHTML = `${seconds}<span class='legend'>Seconds</span>`;
    }      

    setInterval(updateCountdown, 1000);
    updateCountdown();
};

handleCountdown();

