// Course contact form reveal and hide

let contactForm = document.querySelector('.contact-form-container')
let closeForm = document.getElementById('close-button')
let openContactForm = document.querySelectorAll('a.button')
let openContactFormBlack = document.querySelectorAll('a.black_button')

function showContactForm() {
    contactForm.classList.add('show')
}

function hideContactForm() {
    if (contactForm.classList.contains('show')) {
        contactForm.classList.remove('show')
    }
}

closeForm.addEventListener('click', function() {
    contactForm.classList.remove('show')
})

for (i = 0; i < openContactForm.length; i++) {
    openContactForm[i].addEventListener('click', showContactForm)
}

openContactFormBlack[1].addEventListener('click', showContactForm)