// Import the data to customize and insert them into the page
const fetchData = () => {
  console.log("Fetching data...");

  fetch("customize.json")  // Adjusted to go up one directory and load the JSON file
      .then(response => {
          console.log("Response received:", response);
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .then(data => {
          console.log("Data loaded:", data);
          const dataArr = Object.keys(data);
          dataArr.map(customData => {
              console.log("Custom data:", customData, data[customData]);
              if (data[customData] !== "") {
                  if (customData === "imagePath") {
                      document
                          .querySelector(`[data-node-name*="${customData}"]`)
                          .setAttribute("src", data[customData]);
                  } else {
                      document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
                  }
              }
          });
          animationTimeline();
      })
      .catch(error => {
          console.error("There was a problem with the fetch operation:", error);
      });
};

// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];

  // Splitting text for individual character animations
  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;

  const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg"
  };

  const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
      .to(".container", 0.1, { visibility: "visible" })
      .from(".one", 0.7, { opacity: 0, y: 10 })
      .from(".two", 0.4, { opacity: 0, y: 10 })
      .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
      .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
      .from(".three", 0.7, { opacity: 0, y: 10 })
      .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
      .from(".four", 0.7, { scale: 0.2, opacity: 0 })
      .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
      .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
      .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
      .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".message", 0.7, { opacity: 0, y: 50 }) // Animate the message div
      .to(".message", 0.7, { opacity: 1, y: 0, onComplete: () => {
        console.log("Message is now visible!");
      }});
};


fetchData();