// import { Button } from "bootstrap";

// import { ContextExclusionPlugin } from "webpack";

const GITHUB_URL = 'https://github.com/ycabrera90';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ingenier%C3%ADacubana';

export class MainHeader {
    constructor() {

        this.toggleButton_expand = document.getElementById('toggleButton_expand');
        this.toggleButton_collapse = document.getElementById('toggleButton_collapse');
        this.mainNav_backdrop = document.getElementById('mainNav_backdrop');

        this.mainNav_items = document.getElementById('mainNav_items');
        this.allMainNav_item = document.querySelectorAll('#mainNav_items li');

        this.toggleButton_expand.addEventListener('click', this.expandBar.bind(this));
        this.toggleButton_collapse.addEventListener('click', this.collapseBar.bind(this));
        this.mainNav_backdrop.addEventListener('click', this.collapseBar.bind(this));

        this.mainNav_items.addEventListener('click', () => {
            this.goTo(window.event.path[2].id)
        });
    }

    highlightItem(navItem_className) {
        for (const navItem of this.allMainNav_item) {
            if (navItem.classList.contains(navItem_className)) {
                if (!navItem.classList.contains('highlighted')) {
                    navItem.classList.add('highlighted');
                }
            } else {
                if (navItem.classList.contains('highlighted')) {
                    navItem.classList.remove('highlighted');
                }
            }
        }
    }

    expandBar() {
        this.mainNav_items.classList.remove('hide');
        this.mainNav_backdrop.classList.remove('hide');
        this.toggleButton_expand.classList.add('hide');
        this.toggleButton_collapse.classList.remove('hide');
    }

    collapseBar() {
        this.mainNav_items.classList.add('hide');
        this.mainNav_backdrop.classList.add('hide');
        this.toggleButton_expand.classList.remove('hide');
        this.toggleButton_collapse.classList.add('hide');
    }

    goTo(items_Id) {
        if (items_Id === 'item_home') {
            console.log('home');
            document.getElementById('carouselExampleIndicators').querySelector('.first-indicator').click();

        }
        if (items_Id === 'item_about') {
            console.log('about');
            document.getElementById('carouselExampleIndicators').querySelector('.second-indicator').click();

        }
        if (items_Id === 'item_skills') {
            console.log('skills');
            document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();

        }
        if (items_Id === 'item_contact') {
            console.log('constact');
            if (window.innerWidth > 768) {
                document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
            }
            else {
                document.getElementById('carouselExampleIndicators').querySelector('.fourth-indicator').click();
            }
        }
        if (items_Id === 'item_location') {
            console.log('location');
            document.getElementById('carouselExampleIndicators').querySelector('.fifth-indicator').click();

        }
        if (items_Id === 'item_github') {
            console.log('hit');
            window.location.href = GITHUB_URL;

        }
        if (items_Id === 'item_linkedin') {
            console.log('link');
            window.location.href = LINKEDIN_URL;

        }
        this.collapseBar();

    }
}


class App {
    static init() {
        const mainHeader = new MainHeader();
        mainHeader.highlightItem('main-nav__item--home');
    }
}

App.init();