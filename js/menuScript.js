/* Toggle between adding and removing the menu icon */
function toggleMenu() {
    var nav = document.getElementById("navigation");
    if (nav.className === "topNav") {
        nav.className = "show";
    } else {
        nav.className = "topNav";
    }
}