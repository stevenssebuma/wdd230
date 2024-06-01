const url = 'data/members.json';
const gridDirectory = document.querySelector('#gridDirectory');

async function getDirectory() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayDirectory(data.companies);
}



const displayDirectory = companies => {
    companies.forEach((company) => {
        let cardMem = document.createElement('section');
            cardMem.classList.add('cardMem');

        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
    
        let portrait = document.createElement('img');

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phone.textContent = `${company.phone}`;
        membership.textContent = `Membership: ${company.membership}`;
        
        website.textContent = company.websiteURL;
        website.href = company.websiteURL;
        website.setAttribute('target', '_blank');
    

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('alt', `Logo of ${company.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        
        cardMem.appendChild(name);
        cardMem.appendChild(address);
        cardMem.appendChild(phone);
        cardMem.appendChild(membership);
        cardMem.appendChild(website);
        cardMem.appendChild(portrait);
        

        gridDirectory.appendChild(cardMem);

    });
}

getDirectory();

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
const display = document.querySelector("#gridArticle");

gridButton.addEventListener("click", () => {
    display.classList.add("gridButton");
    display.classList.remove("listButton");
});

listButton.addEventListener("click", () =>{
    display.classList.add("listButton");
    display.classList.remove("gridButton");

});