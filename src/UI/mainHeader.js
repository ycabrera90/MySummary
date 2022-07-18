// import { Button } from "bootstrap";

// import { ContextExclusionPlugin } from "webpack";

const GITHUB_URL = 'https://github.com/ycabrera90';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ingenier%C3%ADacubana';

export class MainHeader {
    constructor() {

        this.toggleIconExpand = document.getElementById('_toggleIconExpand');
        this.toggleButtonCollapse = document.getElementById('_toggleButtonCollapse');
        this.mainNavBackdrop = document.getElementById('_mainNavBackdrop');

        this.mainNavItems = document.getElementById('_mainNavItems');
        // this.allMainNavItems = document.querySelectorAll('#_mainNavItems li');

        this.toggleIconExpand.addEventListener('click', this.expandBar.bind(this));
        this.toggleButtonCollapse.addEventListener('click', this.collapseBar.bind(this));
        this.mainNavBackdrop.addEventListener('click', this.collapseBar.bind(this));

        this.mainNavItems.addEventListener('click', () => {
            this.goTo(window.event.path[2].id)      // call goTo with id element
        });
    }

    // highlightItem(navItem_className) {
    //     for (const navItem of this.allMainNav_item) {
    //         if (navItem.classList.contains(navItem_className)) {
    //             if (!navItem.classList.contains('_highlighted')) {
    //                 navItem.classList.add('_highlighted');
    //             }
    //         } else {
    //             if (navItem.classList.contains('_highlighted')) {
    //                 navItem.classList.remove('_highlighted');
    //             }
    //         }
    //     }
    // }

    expandBar() {
        this.mainNavItems.classList.remove('_hide');
        this.mainNavBackdrop.classList.remove('_hide');
        this.toggleIconExpand.classList.add('_hide');
        this.toggleButtonCollapse.classList.remove('_hide');
    }

    collapseBar() {
        this.mainNavItems.classList.add('_hide');
        this.mainNavBackdrop.classList.add('_hide');
        this.toggleIconExpand.classList.remove('_hide');
        this.toggleButtonCollapse.classList.add('_hide');
    }

    goTo(items_Id) {
        if (items_Id === '_itemHome') {
            document.getElementById('carouselExampleIndicators').querySelector('.first-indicator').click();

        }
        if (items_Id === '_itemAbout') {
            document.getElementById('carouselExampleIndicators').querySelector('.second-indicator').click();

        }
        if (items_Id === '_itemskills') {
            console.log('skills');
            document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();

        }

        // hereeeeeee!!!
        if (items_Id === '_itemContact') {
            if (window.innerWidth > 768) {
                document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
            }
            else {
                document.getElementById('carouselExampleIndicators').querySelector('.fourth-indicator').click();
            }
            console.log("here");
        }
        if (items_Id === '_itemlocation') {
            console.log('location');
            document.getElementById('carouselExampleIndicators').querySelector('.fifth-indicator').click();

        }
        if (items_Id === '_itemGithub') {
            console.log('hit');
            window.location.href = GITHUB_URL;

        }
        if (items_Id === '_itemLinkedin') {
            console.log('link');
            window.location.href = LINKEDIN_URL;

        }
        this.collapseBar();
        console.log(items_Id);
    }
}


// class App {
//     static init() {
//         const mainHeader = new MainHeader();
//         // mainHeader.highlightItem('main-nav__item--home');
//     }
// }

// App.init();