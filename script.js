let date = new Date();
document.getElementById('date').innerHTML = date.getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.querySelector('.navbar');
const navBarHeight = document.querySelector('.navbar').getBoundingClientRect().height;
const scrollLinks = document.querySelectorAll('.scroll-link');

const upArrow = document.querySelector('.up-arrow');

navToggle.addEventListener('click', function() {

    linksContainer.classList.toggle('show-links');

    let showLinks = document.querySelector('.links-container');

    changIcon();
    linksContainerHeight = showLinks.getBoundingClientRect().height;
    linksHeight = links.getBoundingClientRect().height;

    if (linksContainerHeight === 0) {
        showLinks.style.height = `${linksHeight}px`;
    } else {
        showLinks.style.height = '0px';
    }

    if (linksContainer.classList.contains('show-links')) {
        scrollLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                linksContainer.style.height = '0';
                navToggle.classList.remove('fa-times');
                navToggle.classList.add('fa-bars');
            })
        });
    }

});

function changIcon() {
    if (navToggle.classList.contains('fa-bars')) {
        navToggle.classList.remove('fa-bars');
        navToggle.classList.add('fa-times');
    } else {
        navToggle.classList.add('fa-bars');
        navToggle.classList.remove('fa-times');
    }
}

window.addEventListener('scroll', function() {
    let scrollHeight = window.pageYOffset;
    if (scrollHeight > navBarHeight) {
        navbar.classList.add('white-navbar');
    } else {
        navbar.classList.remove('white-navbar');
    }

    console.log(scrollHeight);
    if (scrollHeight > 800) {
        upArrow.classList.add('show-arrow');
    } else {
        upArrow.classList.remove('show-arrow');
    }
});

scrollLinks.forEach(function(link) {

    link.addEventListener('click', function(e) {
        // console.log('check');
        let id = link.getAttribute('href').slice(1);
        let section = document.getElementById(id);
        // console.log(section.getBoundingClientRect().top);
        let sectionHeight = section.offsetTop - navBarHeight;
        console.log(sectionHeight);
        window.scrollTo({
            left: 0,
            top: sectionHeight,
            behavior: "smooth",
        })
        e.preventDefault();
    });
})