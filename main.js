// Declare an array named superheros, inside it put three superheros, then randomly acces one superhero and store its value inside an variable and print it.


let herNames = ["Rashi","Rozy","BossLady","Moti"," Chand", "Jal", "Catsy", "Sunshine"];


// Generate random number
function getRandomNum() {
    return Math.floor(Math.random() * herNames.length);
}


// Select random name
let ladyOfTheDay = herNames[getRandomNum()];

console.log(ladyOfTheDay);


// Create personalized greeting
let greeting = `Hii there Muhinji ${ladyOfTheDay}, I hope you're having a great day. 
This message has been traveling since centuries to meet her ${ladyOfTheDay}, 
and to tell her: Thang se soya kar aur khaya kar ${ladyOfTheDay}`;


// Put greeting inside the box
let box = document.querySelector(".box");

box.textContent = greeting;


// Refresh button
let refreshBtn = document.querySelector("#refreshBtn");

refreshBtn.addEventListener("click", function () {

    // Start fade-out animation
    document.body.classList.add("fade-out");

    // Reload after animation finishes
    setTimeout(function () {
        location.reload();
    }, 1200);

});

