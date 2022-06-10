const GITHUB_URL = 'https://github.com/ycabrera90';

export class NavBar {
    constructor() {
        this.navBar = document.getElementById('nav-bar');

        this.navBarButton = this.navBar.querySelector('.navbar-toggler');
        this.icon = this.navBar.querySelector('.navbar-toggler i');
        this.menu = this.navBar.querySelector('.navbar-collapse');
        this.backDrop = this.navBar.querySelector('.backdrop');

        this.homeButton = this.navBar.querySelector('.home-button');
        this.aboutButton = this.navBar.querySelector('.about-button');
        this.skillsButton = this.navBar.querySelector('.skills-button');
        this.contactButton = this.navBar.querySelector('.contact-button');
        this.githubButton = this.navBar.querySelector('.github-button');
        this.locationButton = this.navBar.querySelector('.location-button');


        this.navBarButton.addEventListener('click', this.tooggleBar.bind(this));
        this.backDrop.addEventListener('click', this.collapseBar.bind(this));

        this.homeButton.addEventListener('click', this.goToHome.bind(this));
        this.aboutButton.addEventListener('click', this.goToAbout.bind(this));
        this.skillsButton.addEventListener('click', this.goToSkills.bind(this));
        this.contactButton.addEventListener('click', this.goToContact.bind(this));
        this.githubButton.addEventListener('click', this.goToGitHub.bind(this));
        this.locationButton.addEventListener('click', this.goToLocation.bind(this));
    }

    expandBar() {
        if (this.icon.classList.contains('bi-menu-button-wide')) {
            this.icon.classList.remove('bi-menu-button-wide');
            this.icon.classList.add('bi-menu-button-wide-fill');
        }

        if (!this.backDrop.classList.contains('show')) {
            this.backDrop.classList.add('show');
        }

        if (!this.menu.classList.contains('show')) {
            this.menu.classList.add('show');
        }
    }
    collapseBar() {
        if (this.icon.classList.contains('bi-menu-button-wide-fill')) {
            this.icon.classList.remove('bi-menu-button-wide-fill')
            this.icon.classList.add('bi-menu-button-wide');
        }

        if (this.backDrop.classList.contains('show')) {
            this.backDrop.classList.remove('show');
        }

        if (this.menu.classList.contains('show')) {
            this.menu.classList.remove('show');
        }
    }
    tooggleBar() {
        if (this.icon.classList.contains('bi-menu-button-wide-fill')) {
            this.collapseBar();
        } else {
            this.expandBar();
        }
    }

    goToHome() {
        document.getElementById('carouselExampleIndicators').querySelector('.first-indicator').click();
        this.collapseBar();
    }
    goToAbout() {
        document.getElementById('carouselExampleIndicators').querySelector('.second-indicator').click();
        this.collapseBar();
    }
    goToSkills() {
        document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
        this.collapseBar();
    }
    goToContact() {
        if (window.innerWidth > 768) {
            document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
        }
        else {
            document.getElementById('carouselExampleIndicators').querySelector('.fourth-indicator').click();
        }
        this.collapseBar();
    }
    goToLocation() {
        document.getElementById('carouselExampleIndicators').querySelector('.fifth-indicator').click();
        this.collapseBar();
    }
    goToGitHub() {
        window.location.href = GITHUB_URL;
        this.collapseBar();
    }
}