// Toggle menu icon to show and hide menu on mobile screens
function toggleMenu() {

    // Reset dropdown content when menu icon is clicked
    document.getElementById("web-apps-content").style.display = "none";
    document.getElementById("games-content").style.display = "none";
    document.getElementById("computer-apps-content").style.display = "none";

    // Show or hide menu
    let nav = document.getElementById("navigation");
    if (nav.className === "topNav") {
        nav.className = "show";
    } else {
        nav.className = "topNav";
    }
}

// Toggle web applications dropdown menu to show or hide content
function toggleWebApps() {

    // Reset dropdown content of other menu items
    document.getElementById("games-content").style.display = "none";
    document.getElementById("computer-apps-content").style.display = "none";

    // Show or hide dropdown content
    let webApps = document.getElementById("web-apps-content");
    if (webApps.style.display === "none" || webApps.style.display === "") {
        webApps.style.display = "block";
    } else {
        webApps.style.display = "none";
    }
}

// Toggle web applications dropdown menu to show or hide content
function toggleGames() {

    // Reset dropdown content of other menu items
    document.getElementById("web-apps-content").style.display = "none";
    document.getElementById("computer-apps-content").style.display = "none";

    // Show or hide dropdown content
    let games = document.getElementById("games-content");
    if (games.style.display === "none" || games.style.display === "") {
        games.style.display = "block";
    } else {
        games.style.display = "none";
    }
}

// Toggle web applications dropdown menu to show or hide content
function toggleComputerApps() {

    // Reset dropdown content of other menu items
    document.getElementById("web-apps-content").style.display = "none";
    document.getElementById("games-content").style.display = "none";

    // Show or hide dropdown content
    let computerApps = document.getElementById("computer-apps-content");
    if (computerApps.style.display === "none" || computerApps.style.display === "") {
        computerApps.style.display = "block";
    } else {
        computerApps.style.display = "none";
    }
}