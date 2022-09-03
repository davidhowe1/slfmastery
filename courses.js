/* Course Window Script */

let courseWindow = document.querySelector('.course-div')
let menuItems = document.querySelectorAll('p.course')

/* Course Objects */

let course1 = [
    "Inner Alchemy: Level 1",
    "Is your mind working against you? Whether it be Anxiety, Dread, Low Self-Esteem or Serial Procrastination... It's time for you to take your life back, of simply learn to Mediate like never before!",
    "Interested in securing yourself a place on the next Level 1 Inner Alchemy Course? Click the button below and enquire about dates and availability.",
    "photos/monk.jpeg"
]

let course2 = [
    "Inner Alchemy: Level 2",
    "Do you practice Meditation, yet still find yourself in cycles of behaviour that are causing you pain? 'Meditation alone is not enough'. In my Level 2 course, we dive deep into:",
    "The science of behavioural patterns & creating long-term change - Healing past trauma and rebuilding a new future - Unlimited Motivation: Developing Love for Self and Others",
    "photos/usman-tree-2.jpeg"
]

let course3 = [
    "Inner Alchemy: Level 3",
    "What does it mean to truly live a Masterful Life? The richest man may take his own life, for he is wealthy in all the wrong places, and empty where it matters most.",
    "Week by week, embody the empowering 9 Virtues of Self Mastery - Awaken & become the person you know you're capable of being - Learn the most powerful Problem Solving Meditation Techniques I know and use.",
    "photos/eagle.jpeg"
]

let course4 = [
    "Meditation 101",
    "Too busy or unable to commit to an in person course? Or maybe you prefer the solo journey, learning and developing a Meditation practice at your own pace.",
    "Develop your own Meditation Practice - Learn various techniques and find what works for you - Practice anywhere, any time - Use a breath work technique that instantly calms your mind, Cleanses the body, produces 'feel good' hormones and relaxes the nervous system - All in just 20 minutes a day! (or completed in your own time)",
    "photos/meditation.png"
]

// show course function

function showCourse([title,subtitle,body,image]) {

    let courseWindow = document.getElementById('course-div')

    courseWindow.innerHTML = `
    
    <div class="column-wrapper">

        <div class="two-column-grid" id="private-coaching">

            <div class="column" id="left-side-orange">

                <h1>${title}</h1>
                <p>${subtitle}</p>
                <p>${body}</p>

                <div class="button-container">
                    <a id="button" class="button" onclick="showContactForm()">LEARN MORE</a>
                    <a id="scroll" class="black_button" onclick="hideContactForm()">BACK TO COURSES</a>
                </div>

            </div>

            <div class="column" id="right-side">
                <img src="${image}"/>
            </div>

        </div>

    </div>`

let scrollBtn = document.getElementById('scroll')
let mobileNav = document.querySelector('.main-container')


scrollBtn.addEventListener('click', function() {
    mobileNav.scrollIntoView({behaviour: 'smooth'})
})

}
/* Course Reveal Triggers */

let courseOne = document.getElementById('course-1')
let courseTwo = document.getElementById('course-2')
let courseThree = document.getElementById('course-3')
let courseFour = document.getElementById('course-4')

let course = document.getElementById('course-div')

courseOne.addEventListener('click', function() {
    showCourse(course1)
    course.scrollIntoView({behaviour: "smooth"})
})

courseTwo.addEventListener('click', function() {
    showCourse(course2)
    course.scrollIntoView({behaviour: "smooth"})
})

courseThree.addEventListener('click', function() {
    showCourse(course3)
    course.scrollIntoView({behaviour: "smooth"})
})

courseFour.addEventListener('click', function() {
    showCourse(course4)
    course.scrollIntoView({behaviour: "smooth"})
})