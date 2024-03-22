// Disable text selection on all pages when the window loads
window.addEventListener("load", noSelection);
function noSelection() {
    document.activeElement.style.userSelect = "none";
}

// Display alert message when user wants to print page
window.addEventListener("beforeprint", function() {
    this.alert("My work is protected by copyright!\nPlease do not copy!")
});