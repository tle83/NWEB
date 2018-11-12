//Transitioning through hmtl pages
function linkPage(name) {
    window.location.assign(name);
}
window.onload = function () {
    var elements = document.getElementsByClassName('button');
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            document.getElementById('iframe').src = this.value;
        }
    }
};

// toggle modal for contact me in link.html
var modal = document.getElementById('emailModal');
var trigger = document.getElementById('modalTrigger');
var xClose = document.getElementsByClassName('close')[0];
var closeButton = document.getElementById('closeButton');
//listen for click
trigger.addEventListener('click', openModal);
xClose.addEventListener('click', closeModal);
//closeButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
//functions
function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
function outsideClick(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}