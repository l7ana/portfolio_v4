
// VANILLA JS EVENT LISTENER FOR MULTIPLE ELEMENTS
var accordians = document.querySelectorAll('.accordian');
for (var i = 0, len = accordians.length; i < len; i++) {
    accordians[i].children[0].addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
    });
}