const link = document.getElementById("secret-page-link");
let called = 0;

link.addEventListener('mouseenter', function(updateNav) {
    updateNav.preventDefault();
    link.style.color = "#edfdff"
    if(called === 0) {
        setTimeout(() => {
            link.innerHTML = 'Calculator';
        }, "1000");
        called++;
    }
});

link.addEventListener('mouseleave', function(correctNav) {
    correctNav.preventDefault();
    link.style.color = "#303436"
});