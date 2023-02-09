console.log('~~~~~~~\n /\\_/\\\n( o.o ) < lixuan <3\n > ^ <\n~~~~~~~');

// Toggle Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Check if Constants Exist
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Close after Using Links
const navLinks = document.querySelectorAll('.nav__link')

const linkReaction = () => {
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(nav => nav.addEventListener('click', linkReaction))

// Navbar Scroll Active
const home = document.getElementById('nav-home'),
      about = document.getElementById('nav-about'),
      blog = document.getElementById('nav-blog'),
      contact = document.getElementById('nav-contact')

let currentPage = home

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    let maxVH = window.innerHeight
    let navs = [home, about, blog, contact]

    for (let i = 0;i < navs.length;i++) {
        if (currentScroll > maxVH*(i+0.5) || currentScroll < maxVH*(i-0.5)) {
            continue
        }
        if (navs[i] === currentPage) {
            return
        }
        currentPage = navs[i]
        currentPage.classList.add("button-active")
        
        navs.splice(i, 1)

        let j = 0
        do {
            let handler = navs[j]
            handler.classList.remove("button-active")
            j++
        } while (j < navs.length)

        return
    }
})






