export const menupage = () => {
    const currentTab = document.querySelector('.current');
    currentTab.classList.remove('current');

    const menuTab = document.querySelector('.MENU');
    menuTab.classList.add('current');

    const content = document.querySelector('#content');
    
    const text = document.createElement('h1');
    text.textContent = 'Look At All This Food...';

    content.appendChild(text);
};