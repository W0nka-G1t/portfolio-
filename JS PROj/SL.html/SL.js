const songs = [
"Thread the Needle",

"Fields of Elation",

"When the Bough Breaks",

"Calcutta",

"Nazareth",

"Jericho",

"The Night Does Not Belong to God",

"The Offering",

"Levitate",

"Dark Signs",

"Higher",

"Take Aim",

"Give",

"Gods",

"Sugar",

"Say That You Will",

"Drag Me Under",

"Blood Sport",

"Atlantic",

"Hypnosis",

"Mine",

"Like That",

"The Love You Want",

"Fall For Me",

"Alkaline",

"Distraction",

"Descending",

"Telomeres",

"High Water",

"Missing Limbs",

"Chokehold",

"The Summoning",

"Granite",

"Aqua Regia",

"Vore",

"Ascensionism",

"Are You Really Okay?",

"The Apparition",

"DYWTYLM",

"Rain",

"Take Me Back to Eden",

"Euclid",

"Look to Windward",

"Emergence",

"Caramel",

"Damocles",

"Even in Arcadia",

"Dangerous",
]
const songDiv = document.getElementById("song");
const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-btn");

function generateSong() {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  songDiv.textContent = randomSong;
}

function clearSong() {
  songDiv.textContent = "";
}

generateBtn.addEventListener("click", generateSong);
clearBtn.addEventListener("click", clearSong);
