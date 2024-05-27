const baseURL = "https://stevenssebuma.github.io/wdd230/";
const linksURL = "https://stevenssebuma.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        displayLinks(data.weeks);
    } else {
        throw new Error('Network response was not ok.');
    }
} catch (error) {
    console.error('Fetch error:', error);
}
}

const displayLinks = (weeks) => {
    const linksList = document.querySelector('.links');
    
    weeks.forEach((week) => {
        
        let weekItem = document.createElement('li');
        let weekTitle = document.createElement('strong');
        weekTitle.textContent = week.week;
        weekItem.appendChild(weekTitle);

        let linkList = document.createElement('ul');

        week.links.forEach((link) => {
            let linkItem = document.createElement('li');
            let anchorTag = document.createElement('a');

            anchorTag.textContent = link.title;

        
                anchorTag.href = `${link.url}`
            

            linkItem.appendChild(anchorTag);
            linkList.appendChild(linkItem);
        });
        weekItem.appendChild(linkList);
        linksList.appendChild(weekItem);
    });
}
        
getLinks();