// target the document location for the visits
const visits = document.querySelector(".visits");

// get VALUE for the "numVisits-Is" KEY if it exists. If missing, assign 0 to numVisits variable
let numVisits = Number(window.localStorage.getItem("numVisits-Is")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
}
else {
    visits.textContent = "This is your 1st visit!";
}

// add to the number of visits to be stored
numVisits++;

// set the new VALUE of the local storage, create if not there
localStorage.setItem("numVisits-Is", numVisits);

document.addEventListener('DOMContentLoaded', function() {
    const visitMessage = document.getElementById('visitMessage');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    let message = '';

    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const timeDiff = now - lastVisitDate; // time difference in milliseconds
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // convert to days

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysDiff} days ago.`;
        }
    } else {
        message = "Welcome! Let us know if you have any questions.";
    }

    visitMessage.textContent = message;
    localStorage.setItem('lastVisit', now.getTime().toString()); // update last visit date
});

 