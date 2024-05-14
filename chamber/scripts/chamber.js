const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);

const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});

function changeMenu(menu) {
    document.getElementById('menuHeading').innerText = menu;
}
  
// get the feedback div element so we can do something with it.
const feedbackElement = document.getElementById('feedback');
// get the form so we can read what was entered in it.
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener('submit', function(e) {
    // stop the form from doing the default action.
    e.preventDefault();
    // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
    feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
    // make the feedback element visible.
    feedbackElement.style.display = "block";
    // add a class to move everything down so our message doesn't cover it.
    document.body.classList.toggle('moveDown');
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
const images = document.querySelectorAll('.card-img');

function checkScroll() {
  images.forEach(image => {
    const imageTop = image.getBoundingClientRect().top;
    const imageBottom = image.getBoundingClientRect().bottom;

    if (imageTop < window.innerHeight && imageBottom >= 0) {
      image.classList.add('visible');
    } else {
      image.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);

// Initial check when page loads
checkScroll();


// Update the current event section with the event data
document.getElementById('event-title').textContent = eventData.title;
document.getElementById('event-date').textContent = 'Date: ' + eventData.date;
document.getElementById('event-description').textContent = 'Description: ' + eventData.description;
document.getElementById('event-image').src = eventData.image;
document.getElementById('learn-more').href = eventData.link;


    

