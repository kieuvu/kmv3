const changeColor = document.querySelector('.header');
window.onscroll = function () {
    var onScroll = window.scrollY;
    if (onScroll >= 100) {
        changeColor.classList.add('active');
    }else {
        changeColor.classList.remove('active');
    }
}
