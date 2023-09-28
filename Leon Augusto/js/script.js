
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

function openMenu() {
    if (mobile_navbar.style.display == 'block') {
        mobile_navbar.style.display = 'none'
    } else {
        mobile_navbar.style.display = 'block'
    }
}

function makeView() {
    if (window.innerWidth >= 991) {
        mobile_navbar.style.display = 'block'
        user.style.display = 'none'
    } else {
        mobile_navbar.style.display = 'none'
        user.style.display = 'block'
    }
}