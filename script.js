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