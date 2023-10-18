document.querySelectorAll('li span').forEach(function (link) {
    link.addEventListener('click', function () {
        this.parentElement.classList.toggle('opened');
        toggle(this.nextElementSibling);
    });
});


function toggle(el) {
    el.style.display = (el.style.display == 'none') ? '' : 'none'
}