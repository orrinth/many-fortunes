const fortunes = [
    "You will have great success in the coming week.",
    "Courage is as simple as taking the smallest step forward.",
    "Take a deep breath and relax.",
    "Time will tell. Things will work out in the end.",
    "A leap of faith is sometimes the first thing you must do.",
    "Practice, practice, practice.",
    "There's a time to play and a time to work.",
    "Seek to understand rather than dismiss.",
    "Being patient is a skill.",
    "Everyone has talent. Some just choose to show theirs to the world.",
    "You will soon make a new friend.",
    "Treat yourself today.",
    "You have the greatest smile.",
    "Help someone today.",
    "Make tomorrow a better today.",
    "Face your fears and swallow your doubt.",
    "You're almost there. Keep going!",
    "Music can calm the mind.",
    "Perfect your craft.",
    "Life may sometimes take an unexpected path.",
    "Share what you have with others.",
    "You have the potential to do great things!",
    "Know when enough is enough.",
    "Take the day off. You've earned it!",
    "Find the next adventure!",
    "Let go of the past and embrace the future.",
    "Do what you love.",
    "Every moment counts.",
    "Don't take things for granted.",
    "Show compassion.",
    "You are strong and smart.",
    "You are beautiful and simply amazing!",
    "Take the time to heal.",
    "Change can sometimes be good.",
    "Speak how you feel.",
    "Do something that makes you happy. You deserve it.",
    "Take a break.",
    "Enjoy the little things.",
    "Show someone your support!",
    "Tell someone how much they mean to you.",
    "Chase your dreams.",
    "Have a good day!",
];

const fortuneDisplay = document.querySelector(".fortunes span");
const newFortune = document.querySelector("#new-fortune");
let fortuneNum = 0;

fortuneDisplay.textContent = `${fortunes[fortuneNum]}`;

function updateFortune() {
    fortuneNum++;
    fortuneDisplay.textContent = `${fortunes[fortuneNum]}`;
    
    if (fortuneNum == fortunes.length - 1) {
        fortuneNum = -1;
    }
}

newFortune.addEventListener("click", updateFortune);
newFortune.addEventListener("mouseover", function() {
    this.style.background = "rgb(230, 121, 121)";
    this.style.boxShadow = "none";
    this.style.transition = "background 0.5s ease-out, box-shadow 0.5s ease-out";
});
newFortune.addEventListener("mouseout", function() {
    this.style.background = "rgb(197, 100, 100)";
    this.style.boxShadow = "10px 10px 10px 0 black";
    this.style.transition = "background 0.5s ease-out, box-shadow 0.5s ease-out";
});
