
// Event Handler
function changestyle() {
    var classname = this.getAttribute("class");
    if (classname=="answer") {
    this.setAttribute("class","answer selected");
    }
    else {
        this.setAttribute("class", "answer");
    }
}
for(var i=0; i<4; i++) {
    document.getElementsByClassName('answer')[i].addEventListener('click',changestyle,false);
}