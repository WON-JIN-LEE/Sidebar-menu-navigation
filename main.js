const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.querySelector(toggleId),
        navbar = document.querySelector(navbarId),
        bodypadding = document.querySelector(bodyId);

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show');
            bodypadding.classList.toggle('expander');
            toggle.classList.toggle('rotate');
        });
    }
}

showMenu('#nav-toggle', '#navbar', '#body')

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    linkColor.forEach(ele => ele.classList.remove('active'));
    console.log(this);
    this.classList.add('active');
    
}

linkColor.forEach(ele => ele.addEventListener('click', colorLink));