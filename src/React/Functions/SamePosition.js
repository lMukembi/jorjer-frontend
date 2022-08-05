window.onunload = function() {
    localStorage.setItem("scrollY", window.scrollY);
}

window.onload = function() {  
    let scrollY = parseInt(localStorage.getItem("scrollY"));
    if (!isNaN(scroll)) {
        window.scroll(0, scrollY);
    }
}