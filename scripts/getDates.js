const option = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.getElementById("current-date").textContent = new Date().toLocaleDateString('en-US', option)

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});

function changeMenu(menu) {
    document.getElementById('menuHeading').innerText = menu;
}