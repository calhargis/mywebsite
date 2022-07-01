var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function darkMode() {
    var element = document.body;
    if (element.getAttribute(body.darkMode)) {
        element.className = "light-mode";
        return false;
    }
    element.className = "dark-mode";
    return false;
  }

  function lightMode() {
    var element = document.body;
    element.className = "light-mode";
  }