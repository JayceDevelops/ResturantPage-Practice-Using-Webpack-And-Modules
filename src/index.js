import "./style.css";
import { inithomepage } from "./modules/init-homepage";
import { homepage } from "./modules/homepage"
import { menupage } from "./modules/menu";
import { eventspage } from "./modules/events";
import { reservationpage } from "./modules/reservations";
import { contactpage } from "./modules/contact";

inithomepage();

const home = document.querySelector('.home');
home.addEventListener("click", () => {
    ClearContent();
    homepage();
});

const menu = document.querySelector('.MENU');
menu.addEventListener("click", () => {
    ClearContent();
    menupage();
}); 

const events = document.querySelector('.EVENTS');
events.addEventListener("click", () => {
    ClearContent();
    eventspage();
}); 

const reservations = document.querySelector('.RESERVATIONS');
reservations.addEventListener("click", () => {
    ClearContent();
    reservationpage();
}); 

const contact = document.querySelector('.CONTACT');
contact.addEventListener("click", () => {
    ClearContent();
    contactpage();
}); 


const ClearContent = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
};
