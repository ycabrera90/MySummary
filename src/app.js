import { Map } from './UI/Map';
import { validateEmail } from './Utility/inputsValidators';

const GITHUB_URL = 'https://github.com/ycabrera90';

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
        this.messaje = this.contacMe.querySelector('#user-input-message');
        this.buttonSendMessage = this.contacMe.querySelector('button');

        this.buttonSendMessage.addEventListener('click', this.sendMessaje.bind(this));
    }

    sendMessaje() {
        const name = this.name.value.trim();
        const email = this.email.value.trim().toLowerCase();
        const subject = this.subject.value.trim();
        const messaje = this.messaje.value.trim();

        if (name) {
            console.log(name)
        }
        else {
            alert('please insert a name');
        }

        if (validateEmail(email)) {

            console.log(email);
        }
        else {
            alert('please insert a valid mail');
        }

        if (subject) {
            console.log(subject)
        }
        else {
            alert('please insert a subject');
        }
        if (messaje) {
            console.log(subject)
        }
        else {
            alert('please insert a messaje');
        }

        




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

