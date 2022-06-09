import { Map } from './UI/Map';
import { validateEmail } from './Utility/inputsValidators';
import { HttpReq } from './Utility/HTTP';

const GITHUB_URL = 'https://github.com/ycabrera90';
const PROTOCOL = 'https'
// const SERVER_URL = 'localhost';
// const PORT = 3000;

const SERVER_URL = 'eip-my-summary.herokuapp.com';
const PORT = "";

class LoadedPlace {
    constructor(coordinates) {
        const map = new Map();
        map.render(coordinates);
    }
}

class NavBar {
    constructor() {
        this.navBar = document.getElementById('nav-bar');
        this.navBarButton = this.navBar.querySelector('.navbar-toggler');
        this.backDrop = this.navBar.querySelector('.backdrop');
        this.homeButton = this.navBar.querySelector('.home-button');
        this.aboutButton = this.navBar.querySelector('.about-button');
        this.contactButton = this.navBar.querySelector('.contact-button');
        this.githubButton = this.navBar.querySelector('.github-button');


        this.navBarButton.addEventListener('click', () => {
            this.toggleButton();
            this.toggleBackdrop();
        });

        this.backDrop.addEventListener('click', () => {
            this.toggleButton();
            this.toggleBackdrop();
            this.collapseBar();
        });

        this.githubButton.addEventListener('click', () => {
            window.location.href = GITHUB_URL;
        });

        this.homeButton.addEventListener('click', this.goToHome);

        this.aboutButton.addEventListener('click', this.goToAbout);

        this.contactButton.addEventListener('click', this.goToContact);
    }

    toggleBackdrop() {
        this.backDrop.classList.toggle('show');
    }

    toggleButton() {
        const icon = this.navBar.querySelector('.navbar-toggler i');
        icon.classList.toggle('bi-menu-button-wide-fill');
        icon.classList.toggle('bi-menu-button-wide');
    }

    collapseBar() {
        const collapseBar = this.navBar.querySelector('.navbar-collapse');
        collapseBar.classList.toggle('show');
    }

    goToHome() {
        document.getElementById('carouselExampleIndicators').querySelector('.first-indicator').click();
    }

    goToAbout() {
        document.getElementById('carouselExampleIndicators').querySelector('.second-indicator').click();
    }

    goToContact() {
        if (window.innerWidth > 768) {
            document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
        }
        else {
            document.getElementById('carouselExampleIndicators').querySelector('.fourth-indicator').click();
            
        }
    }


}

class ContacMeForm {
    constructor() {
        this.contacMe = document.getElementById('caroussel-item-contactMe');
        this.name = this.contacMe.querySelector('.user-input.name');
        this.email = this.contacMe.querySelector('.user-input.email');
        this.subject = this.contacMe.querySelector('.user-input.subject');
        this.messagge = this.contacMe.querySelector('.user-input.messagge');
        this.buttonSendMessage = this.contacMe.querySelector('.button-send');

        this.buttonSendMessage.addEventListener('click', this.sendMessagge.bind(this));
        const server = new HttpReq(PROTOCOL, SERVER_URL, PORT);
    }

    sendMessagge() {
        const userContact = {
            name: this.name.value.trim(),
            subject: this.subject.value.trim(),
            email: this.email.value.trim().toLowerCase(),
            messagge: this.messagge.value.trim()
        };

        console.log(userContact);

        if (!userContact.name) {
            // alert('please insert a name');
            this.name.classList.add('border-color-red');
            return;
        }
        else {
            this.name.classList.remove('border-color-red');
        }

        if (!validateEmail(userContact.email)) {
            // alert('please insert a valid mail');
            this.email.classList.add('border-color-red');
            return;
        }

        else {
            this.email.classList.remove('border-color-red');
        }

        if (!userContact.subject) {
            // alert('please insert a subject');
            this.subject.classList.add('border-color-red');
            return;
        }
        else {
            this.subject.classList.remove('border-color-red');
        }

        if (!userContact.messagge) {
            // alert('please insert a messagge');
            this.messagge.classList.add('border-color-red');
            return;
        }
        else {
            this.messagge.classList.remove('border-color-red');
        }

        const server = new HttpReq(PROTOCOL, SERVER_URL, PORT);

        server.sendHttpRequest('POST', '/contact-me-mail', userContact).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
            console.log('sorryyyyy');
        });
    }
}

class Caroussel {
    constructor() {
        this.caroussel = document.getElementById('carouselExampleIndicators');

        this.allIndicators = this.caroussel.querySelectorAll('.carousel-indicators button');
        this.showHideIndicators = this.caroussel.querySelectorAll(".showHide-indicator");
        this.mainIndicatior = this.caroussel.querySelector('.first-indicator');

        this.allCarousselItems = this.caroussel.querySelectorAll('.carousel-item');
        this.showHideCarousselItems = this.caroussel.querySelectorAll('#caroussel-item-mySkills, #caroussel-item-myLocation');
        this.mainCarousselItem = this.caroussel.querySelector('#caroussel-item-home');

        // If when a user open this page the screen size y greater than 768 px, it deploy only the necesary caroussel slides
        if (window.innerWidth > 768) {
            this.renderLarge();
        }

        // check is there were a windows size change
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                this.renderSmall();
            } else {
                this.renderLarge();
            }
        })
    }

    renderSmall() {
        var reset = false;
        for (const showHideCarousselItem of this.showHideCarousselItems) {
            if (!showHideCarousselItem.classList.contains('carousel-item')) {
                showHideCarousselItem.classList.remove('display-none');
                showHideCarousselItem.classList.add('carousel-item');
                reset = true;
            };
        }
        for (const showHideIndicator of this.showHideIndicators) {
            if (showHideIndicator.classList.contains('display-none')) {
                showHideIndicator.classList.remove('display-none');
                reset = true;
            };
        }
        if (reset) {
            this.resetCaroussel();
        }
    }

    renderLarge() {
        var reset = false;
        for (const showHideCarousselItem of this.showHideCarousselItems) {
            if (showHideCarousselItem.classList.contains('carousel-item')) {
                showHideCarousselItem.classList.add('display-none');
                showHideCarousselItem.classList.remove('carousel-item');
                reset = true;
            };
        }
        for (const showHideIndicator of this.showHideIndicators) {
            if (!showHideIndicator.classList.contains('display-none')) {
                showHideIndicator.classList.add('display-none');
                reset = true;
            };
        }
        if (reset) {
            this.resetCaroussel();
        }
    }

    resetCaroussel() {
        // whe this method is excecuted the carouse go to the first slide
        // clear of 'active' class all items
        for (const carousselItem of this.allCarousselItems) {
            if (carousselItem.classList.contains('active')) {
                carousselItem.classList.remove('active');
            }
        }
        // put class 'active' only the main item
        this.mainCarousselItem.classList.add('active');

        // clear of 'active' class all indicators
        for (const indicator of this.allIndicators) {
            if (indicator.classList.contains('active')) {
                indicator.classList.remove('active');
            }
        }
        // put class 'active' only the main indicator
        this.mainIndicatior.classList.add('active');
    }
}
class App {
    static init() {
        new NavBar();

        new ContacMeForm();

        new Caroussel();

        new LoadedPlace({ lat: -34.88761217420463, lng: -56.17486101765247 });

    }
}

App.init();




