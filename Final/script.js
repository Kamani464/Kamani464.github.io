
if (window.location.pathname.includes("Page7.html")) {
    setTimeout(redirectToPage1D, 5000);
}

var theDiv = document.getElementById("helloDiv");

function playAudio(url) {
  new Audio(url).play();
}
function sayHello() {
    var fNameVar = document.getElementById("fName").value;
    var lNameVar = document.getElementById("lName").value;
    theDiv.innerHTML = "Hello " + fNameVar + " " + lNameVar + "!";
}

function mouseOverFUNC() {
    document.getElementById("goon").src = "Resources/SadnessH.jpg";
}

function mouseOutFUNC() {
    document.getElementById("goon").src = "Resources/Sadness.jpg";
}

function mouseDownFUNC() {
    document.getElementById("goon").src = "Resources/Sadness2.jpg";
}

function mouseOverFUNC() {
    document.getElementById("break").src = "Resources/Breakit.png";
}

function mouseOutFUNC() {
    document.getElementById("break").src = "Resources/Carlton2.jpg";
}

function mouseDownFUNC() {
    document.getElementById("break").src = "Resources/Broken.png";
}


function redirectToPage1D() {
    window.location.href = "PageD1.html";
}

function displayWinMessage() {
    console.log("Clicked on the image!");
    if (confirm("YOU DID IT!! YOU FOUND THE BEAR! Back to home?")) {
        window.location.href = "index.html"; 
    }
}
