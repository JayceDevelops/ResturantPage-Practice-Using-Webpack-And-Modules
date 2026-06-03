import foodImage from "./assets/homepage.jpg";

export const homepage = () => {
    const tabs = ['HOME', 'MENU', 'EVENTS', 'RESERVATIONS', 'CONTACT', 'BOOK A TABLE'];

    const header = document.querySelector('header');

    const heading = document.createElement('h1');
    heading.textContent = 'CULINARIA';
    header.appendChild(heading);

    const navigation = document.createElement('nav');

    tabs.forEach((tab) => {

        const button = document.createElement('button');
        button.textContent = tab;

        console.log(tab);
        if (tab === 'HOME'){
            button.classList.add('tab', 'current');
        }
        else if (tab === 'BOOK A TABLE'){
            button.classList.add('tab', 'book');
        }
        else {
            button.className = 'tab';
        }

        navigation.appendChild(button);
    });

    header.appendChild(navigation);

    const content = document.querySelector('#content');

    const contentHeader = document.createElement('h1');
    contentHeader.textContent = 'CRAFTING MOMENTS INTO FLAVORS.';

    content.appendChild(contentHeader);

    const contentBody = document.createElement('h3');
    contentBody.textContent = 'Experience a fusion of local ingredients and modern culinary arts at Culinaria.';
    
    content.appendChild(contentBody);

    const viewMenuButton = document.createElement('button');
    viewMenuButton.textContent = 'VIEW MENU';

    content.appendChild(viewMenuButton);

    const image = document.createElement('div');
    image.className = 'image';
    image.style.background = foodImage;

    content.appendChild(image);

};