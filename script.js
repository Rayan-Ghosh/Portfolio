// Typed.js Initialization for dynamic text
new Typed("#typed", {
    strings: ["Web Developer", "Web Developer", "&amp; a Programmer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000, // Time before backspacing (in milliseconds)
    loop: true
});

// Tab switch function
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active-tab");
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// Ensure the content is displayed only for HackerRank on hover
document.querySelectorAll('.hackerank-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.work-content').style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.work-content').style.display = 'none';
    });
});
