import { Map } from './UI/Map';
import { validateEmail } from './Utility/inputsValidators';
import { HttpReq } from './Utility/HTTP';

const GITHUB_URL = 'https://github.com/ycabrera90';
const PROTOCOL = 'http'
const SERVER_URL = 'localhost';
const PORT = 3000;

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
}

class ContacMeForm {
    constructor() {
        this.contacMe = document.getElementById('Item3-ContactMe-lg');

        this.name = this.contacMe.querySelector('#user-input-name');
        this.email = this.contacMe.querySelector('#user-input-email');
        this.subject = this.contacMe.querySelector('#user-input-subject');
        this.messagge = this.contacMe.querySelector('#user-input-message');
        this.buttonSendMessage = this.contacMe.querySelector('button');

        this.buttonSendMessage.addEventListener('click', this.sendMessagge.bind(this));
    }

    sendMessagge() {
        const userContact = {
            name: this.name.value.trim(),
            subject: this.subject.value.trim(),
            email: this.email.value.trim().toLowerCase(),
            messagge: this.messagge.value.trim()
        };

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

        server.sendHttpRequest('POST', 'contact-me-mail', userContact).then(resp => {
            console.log(resp);
        }).catch(error => {
            console.log(error);
            console.log('sorryyyyy');
        });
    }
}



class App {
    static init() {
        new ContacMeForm();
        // new LoadedPlace({ lat: -34.88761217420463, lng: -56.17486101765247 });

        // new NavBar();
    }
}

App.init();









