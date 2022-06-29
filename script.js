const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('main-nav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})