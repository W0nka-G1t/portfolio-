const songs = [
  "505 (2007)",
  "All My Own Stunts (2011)",
  "American Sports (2018)",
  "Arabella (2013)",
  "Batphone (2018)",
  "Black Treacle (2011)",
  "Body Paint (2022)",
  "Brianstorm (2007)",
  "Brick by Brick (2011)",
  "Cornerstone (2009)",
  "Crying Lightning (2009)",
  "D Is For Dangerous (2007)",
  "Dance Little Liar (2009)",
  "Dangerous Animals (2009)",
  "Do I Wanna Know? (2013)",
  "Do Me a Favour (2007)",
  "Don't Sit Down 'Cause I've Moved Your Chair (2011)",
  "Fire and the Thud (2009)",
  "Fireside (2013)",
  "Fluorescent Adolescent (2007)",
  "Four Out of Five (2018)",
  "Golden Trunks (2018)",
  "Hello You (2022)",
  "I Ain't Quite Where I Think I Am (2022)",
  "I Bet You Look Good On The Dancefloor (2006)",
  "I Wanna Be Yours (2013)",
  "I Want It All (2013)",
  "Knee Socks (2013)",
  "Leave Before The Lights Come On (2016)",
  "Library Pictures (2011)",
  "Love is a Laserquest (2011)",
  "Mad Sounds (2013)",
  "My Propeller (2009)",
  "No 1 Party Anthem (2013)",
  "Old Yellow Bricks (2007)",
  "One For The Road (2013)",
  "One Point Perspective (2018)",
  "Piledriver Waltz (2011)",
  "Potion Approaching (2009)",
  "R U Mine? (2012)",
  "Reckless Serenade (2011)",
  "Red Light Indicates Doors Are Secure (2006)",
  "Riot Van (2006)",
  "Science Fiction (2018)",
  "Secret Door (2009)",
  "She Looks Like Fun (2018)",
  "She's Thunderstorms (2011)",
  "Snap Out Of It (2013)",
  "Star Treatment (2018)",
  "Stop the World I Wanna Get Off With You (2013)",
  "Suck It and See (2011)",
  "Teddy Picker (2007)",
  "That's Where You're Wrong (2011)",
  "The Hellcat Spangled Shalalala (2011)",
  "The Ultracheese (2018)",
  "The World's First Ever Monster Truck Front Flip (2018)",
  "There'd Better Be A Mirrorball (2022)",
  "This House Is A Circus (2007)",
  "Tranquility Base Hotel & Casino (2018)",
  "When The Sun Goes Down (2006)",
  "Why'd You Only Call Me When You're High? (2013)",
  "You're So Dark (2013)"
];

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
