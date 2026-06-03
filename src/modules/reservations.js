export const reservationpage = () => {
    const currentTab = document.querySelector('.current');
    currentTab.classList.remove('current');

    const menuTab = document.querySelector('.RESERVATIONS');
    menuTab.classList.add('current');

    const content = document.querySelector('#content');
    
    const text = document.createElement('h1');
    text.textContent = 'Look At All These Reservations...';

    content.appendChild(text);
};