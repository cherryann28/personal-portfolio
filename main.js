
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

// Close sidebar after clicking on a link
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        hideSidebar();
    });
});


// Function to set the active link
function setActiveLink() {
    const activeLink = localStorage.getItem('activeNav') || '#home';
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === activeLink);
    });
}
// Set the active link on page load
window.addEventListener('load', setActiveLink);

// Add event listeners to nav links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        localStorage.setItem('activeNav', link.getAttribute('href'));
        setActiveLink(); // Call the function to update active link
    });
});


// Fix Nav
const navBar = document.querySelector(".nav");

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 0) { // Change this to adjust when the sticky effect starts
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});


/* =============== SCROLL UP ============== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





