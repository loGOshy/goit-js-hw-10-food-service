import menuCardsTp from './templates/menuElement.hbs';
import cards from './menu.json';

const menuListRef = document.querySelector('.js-menu');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
let themeFromMemory = localStorage.getItem('theme');

chooseDefaultTheme();

themeSwitchRef.addEventListener('change', changeTheme);

const cardsMarkup = createCardsMarkup(cards);

menuListRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(cards) {
    return menuCardsTp(cards);
}

function chooseDefaultTheme() {
    if(themeFromMemory === Theme.DARK) {
        changeDark()
        themeSwitchRef.checked = true;
    } else {
        changeLight()
    }
};
function changeTheme(evt) {        
    if(themeSwitchRef.checked) {
        changeDark();
        localStorage.setItem('theme', Theme.DARK);
                   
    } else {
        changeLight();
        localStorage.setItem('theme', Theme.LIGHT)
    } 
themeFromMemory = localStorage.getItem('theme');
};

function changeDark() {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
};

function changeLight() {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
}

