import { Map } from '/src/UI/Map.js';

console.log('esto es una prueba');

class LoadedPlace {
    constructor(coordinates) {
        const map = new Map();
        map.render(coordinates);
    }
}

class NavBar {
    constructor() {
        this.navBar = document.getElementById('nav-bar');
        this.navBarButton = this.navBar.querySelector('.navbar-toggler')
        this.backDrop = this.navBar.querySelector('.backdrop')
        this.navBarButton.addEventListener('click', this.toggleButton.bind(this));
    }

    toggleButton() {
        const icon = this.navBar.querySelector('.navbar-toggler i');
        icon.classList.toggle('bi-menu-button-wide-fill')
        icon.classList.toggle('bi-menu-button-wide')
    }
}

class App {
    static init() {
        new LoadedPlace({ lat: -34.88761217420463, lng: -56.17486101765247 });

        new NavBar();
    }
}

App.init();
