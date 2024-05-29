const baseURL = "https://stevenssebuma.github.io/wdd230/chamber/";
const membersURL = "https://stevenssebuma.github.io/wdd230/chamber/data/members.json";
const docMembers = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayMembers(data.members);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayMembers = (members) => {

    members.forEach(member => {

        // create document elements for each card
        const card = document.createElement("section");
        const business = document.createElement("h3");
        const address = document.createElement("address");
        const street = document.createElement("p");
        const csz = document.createElement("p");
        const website = document.createElement("a");
        const phone = document.createElement("a");
        const email = document.createElement("a");
        const logo = document.createElement("img");
        const membership = document.createElement("p");
        const category = document.createElement("p");

        // set element properties & values
        card.setAttribute("class", "card");
        business.textContent = member.business;
        street.textContent = member.address.street;
        let compoundCSZ = `${member.address.city}, ${member.address.state} ${member.address.zip}`;
        csz.textContent = compoundCSZ;
        phone.setAttribute("href", `tel:${member.phone}`);
        phone.textContent = member.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        email.setAttribute("href", `mailto:${member.email}`);
        email.textContent = member.email;
        website.setAttribute("href", member.website);
        website.textContent = "Go to website";
        membership.textContent = `Membership: ${member.membership}`;
        category.textContent = `Category: ${member.category}`;

        // define logo image attributes
        logo.setAttribute("src", member.img);
        logo.setAttribute("alt", `Logo for ${member.business}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "350");
        logo.setAttribute("height", "450");

        // append elements to the document
        address.appendChild(street);
        address.appendChild(csz);

        card.appendChild(business);
        card.appendChild(document.createElement("br"));
        card.appendChild(logo);
        card.appendChild(document.createElement("br"));
        card.appendChild(address);
        card.appendChild(document.createElement("br"));
        card.appendChild(phone);
        card.appendChild(document.createElement("br"));
        card.appendChild(website);
        card.appendChild(document.createElement("br"));
        card.appendChild(email);
        card.appendChild(document.createElement("br"));
        card.appendChild(membership);
        card.appendChild(document.createElement("br"));
        card.appendChild(category);

        docMembers.appendChild(card);

    });
}
getMembers();

// grid vs list functionality

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    docMembers.classList.add("grid");
    docMembers.classList.remove("list");
});

listButton.addEventListener("click", () => {
    docMembers.classList.add("list");
    docMembers.classList.remove("grid");
});