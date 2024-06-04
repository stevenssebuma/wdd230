const spotlightURL = 'data/members.json';


async function getSpotlight() {
    try {
        const spotResponse = await fetch(spotlightURL);
        if (!spotResponse.ok) {
            throw new Error(`HTTP error! Status: ${spotResponse.status}`);
        }
        const spotData = await spotResponse.json();
        displaySpotlight(spotData.companies);
    } catch (error) {
        console.error('Error fetching the spotlight data:', error);
    }
}



const displaySpotlight = companies => {
    const qualified = companies.filter(company => company.membership === 'Silver' || company.membership === 'Gold');
    
    if (qualified.length === 0) {
        console.warn('No qualified companies found.');
        return;
    }

    const shuffleMembers = qualified.sort(() => 0.5 - Math.random());
    const spotlightMembers = shuffleMembers.slice(0, 3);

    const spotlightIds = ['spotWinner1', 'spotWinner2', 'spotWinner3'];

    spotlightMembers.forEach((company, index) => {
        const memberAd = document.createElement('div');
        memberAd.classList.add('spotWinner');

        let name = document.createElement('h2');
        let website = document.createElement('a');
        let membership = document.createElement('p');
       
        let portrait = document.createElement('img');

        name.textContent = `${company.name}`;
        membership.textContent = `Membership: ${company.membership}`;
        
        website.textContent = company.websiteURL;
        website.href = company.websiteURL;
        website.setAttribute('target', '_blank');
    

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Logo of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        
        memberAd.appendChild(name);
        memberAd.appendChild(membership);
        memberAd.appendChild(website);
        memberAd.appendChild(portrait);

        const spotlight = document.getElementById(spotlightIds[index]);
        if (spotlight) {
            spotlight.innerHTML = ''; // Clear existing content
            spotlight.appendChild(memberAd);
        } else {
            console.error(`Element with ID ${spotlightIds[index]} not found.`);
        }
});
}
getSpotlight();

