// main.js

console.log("Hello, World!");

const moodColors = {
  happy: ["#FFD93D", "#FFB347", "#FF6F61"],
  sad: ["#4A90E2", "#236062", "#9c91e7"],
  calm: ["#A8E6CF", "#81C784", "#AED581"],
  angry: ["#FF4C4C", "#D32F2F", "#B71C1C"],
  anxious: ["#B39DDB", "#9575CD", "#7E57C2"]
};

const moodWords = {
  happy: ["joy", "light", "warmth", "smile", "energy"],
  sad: ["quiet", "blue", "alone", "heavy", "slow"],
  calm: ["peace", "still", "soft", "breathe", "ease"],
  angry: ["fire", "tension", "storm", "sharp", "burst"],
  anxious: ["uneasy", "restless", "uncertain", "drift", "tight"]
};

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateMood() {
  const mood = document.getElementById("moodSelect").value;

  const color = getRandomItem(moodColors[mood]);
  document.body.style.backgroundColor = color;

  let words = [];
  for (let i = 0; i < 3; i++) {
    words.push(getRandomItem(moodWords[mood]));
  }
  document.getElementById("words").innerText = words.join(" , "); 
  
}
