let homeNumber = 0;

function homeOne() {
    homeNumber += 1;
    document.getElementById("home-number").textContent = homeNumber;
    highlightHigherScore()
}

function homeTwo() {
    homeNumber += 2;
    document.getElementById("home-number").textContent = homeNumber;
    highlightHigherScore()
}

function homeThree() {
    homeNumber += 3;
    document.getElementById("home-number").textContent = homeNumber;
    highlightHigherScore()
}

let guestNumber = 0;

function guestOne() {
    guestNumber += 1;
    document.getElementById("guest-number").textContent = guestNumber;
    highlightHigherScore()
}

function guestTwo() {
    guestNumber += 2;
    document.getElementById("guest-number").textContent = guestNumber;
    highlightHigherScore()
}

function guestThree() {
    guestNumber += 3;
    document.getElementById("guest-number").textContent = guestNumber;
    highlightHigherScore()
}

function newGame() {
    document.getElementById("home-number").textContent = 0
    document.getElementById("guest-number").textContent = 0
    homeNumber = 0;
    guestNumber = 0;
    document.getElementById("home-number").classList.remove("highlight");
    document.getElementById("guest-number").classList.remove("highlight");
}

function highlightHigherScore() {
    let homeNumber = parseInt(document.getElementById("home-number").textContent);
    let guestNumber = parseInt(document.getElementById("guest-number").textContent);

    if (homeNumber > guestNumber) {
        document.getElementById("home-number").classList.add("highlight");
        document.getElementById("guest-number").classList.remove("highlight");
    } else if (guestNumber > homeNumber) {
        document.getElementById("guest-number").classList.add("highlight");
        document.getElementById("home-number").classList.remove("highlight");
    }
}