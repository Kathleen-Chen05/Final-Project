document.addEventListener("DOMContentLoaded", () => {

  const moodSelect = document.getElementById("moodSelect");
  const generateBtn = document.getElementById("generateBtn");
  const words = document.getElementById("words");

  const moodData = {
    happy: { joy: "#FFD93D", smile: "#FFB347", energy: "#FF6F61", sunshine: "#FFE66D", laughter: "#FFA94D" },
    sad: { quiet: "#4A90E2", blue: "#236062", alone: "#9C91E7", heavy: "#5C6BC0", slow: "#607D8B" },
    calm: { peace: "#A8E6CF", still: "#81C784", breathe: "#AED581", soft: "#80CBC4", ease: "#B2DFDB" },
    angry: { fire: "#FF4C4C", storm: "#D32F2F", sharp: "#B71C1C", rage: "#E53935", burst: "#F44336" },
    anxious: { uneasy: "#B39DDB", restless: "#9575CD", uncertain: "#7E57C2", drift: "#9575DE", tight: "#673AB7" }
  };
  const moodEmojis = {
    happy: ["😄", "🥳", "😁", "✨", "😆"],
    sad: ["😢", "😭", "🥀", "☁️", "😔"],
    calm: ["😌", "🌿", "🌊", "🧘", "☁️"],
    angry: ["😡", "🔥", "💢", "⚡", "😤"],
    anxious: ["😰", "😬", "💭", "🫠", "😟"]
  };
  function generateMood() {
    const mood = moodSelect.value;

    const items = Object.entries(moodData[mood]);
    const [word, color] = items[Math.floor(Math.random() * items.length)];
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = color;
    words.textContent = `${word} — ${color}`;
  }

  function showEmojiAtCursor(e) {
    const mood = moodSelect.value;
    const list = moodEmojis[mood];
    const emoji = list[Math.floor(Math.random() * list.length)];
    const el = document.createElement("div");
    el.className = "emoji";
    el.textContent = emoji;

    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 8000);
  }

  generateBtn.addEventListener("click", generateMood);

  document.addEventListener("click", (e) => {
    if (moodSelect.contains(e.target) || generateBtn.contains(e.target)) return;
    showEmojiAtCursor(e);
  });

});
