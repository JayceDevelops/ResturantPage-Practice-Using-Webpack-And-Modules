import foodImage from "../assets/homepage.jpg";

export const homepage = () => {
    const currentTab = document.querySelector('.current');
    currentTab.classList.remove('current');

    const menuTab = document.querySelector('.home');
    menuTab.classList.add('current');

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