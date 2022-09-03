function scrollToTop() {
    body.top.scrollIntoView()
}

const menu = document.querySelector ('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

function revealColumns() {
    let columns = document.querySelectorAll('.column')
    for (i = 0; i < columns.length; i++) {
        let windowHeight = window.innerHeight
        let elementTop = columns[i].getBoundingClientRect().top
        let elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            columns[i].classList.add('active')
        } else {
            columns[i].classList.remove('active')
        }
    }
}

window.addEventListener("scroll", revealColumns)
