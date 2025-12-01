const names = [

"Liam",
"Noah",
"Oliver",
"Theodore",
"James",
"Henry",
"Mateo",
"Elijah",
"Lucas",
"William",
"Olivia",
"Emma",
"Amelia",
"Charlotte",
"Mia",
"Sophia",
"Isabella",
"Evelyn",
"Ava",
"Sofia",
];

const nameDiv = document.getElementById("name");
const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-Btn");
 
function generateName() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    nameDiv.textContent = randomName;
}
function clearName() {
    nameDiv.textContent = "" ;
}
generateBtn.addEventListener("click", generateName);
clearBtn.addEventListener("click", clearName);