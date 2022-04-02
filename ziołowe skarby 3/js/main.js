const navBar = document.querySelector('.navbar-toggler')
const navBarCollapse = document.querySelector('.navbar-collapse')
const headerText = document.querySelector('.nav-link.dropdown-toggle')
const header = document.querySelector('.header-text')
const logoBox = document.querySelector('.logo-box')
const prices = document.querySelector('table')




// wyblurowanie menu jak rozsuwa sie nawigacja
const showMenu = () => {
    logoBox.classList.toggle('blur-menu') 
}

navBar.addEventListener('click', showMenu)

const hideMenu = () => {
    
}






const footerYear = document.querySelector('.footyear')

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear()