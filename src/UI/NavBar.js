import { Button } from "bootstrap";

const GITHUB_URL = 'https://github.com/ycabrera90';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ingenier%C3%ADacubana';

export class NavBar {
    constructor() {
        this.navBar = document.getElementById('nav-bar');

        this.navBarButton = this.navBar.querySelector('.navbar-toggler');
        this.icon = this.navBar.querySelector('.navbar-toggler i');
        this.menu = this.navBar.querySelector('.navbar-collapse');
        this.backDrop = this.navBar.querySelector('.backdrop');

        this.allButtons = this.navBar.querySelectorAll('.navbar-collapse li');
        this.homeButton = this.navBar.querySelector('.home-button');
        this.aboutButton = this.navBar.querySelector('.about-button');
        this.skillsButton = this.navBar.querySelector('.skills-button');
        this.contactButton = this.navBar.querySelector('.contact-button');
        this.githubButton = this.navBar.querySelector('.github-button');
        this.linkedinButton = this.navBar.querySelector('.linkedin-button');
        this.locationButton = this.navBar.querySelector('.location-button');


        this.navBarButton.addEventListener('click', this.tooggleBar.bind(this));
        this.backDrop.addEventListener('click', this.collapseBar.bind(this));

        this.homeButton.addEventListener('click', this.goToHome.bind(this));
        this.aboutButton.addEventListener('click', this.goToAbout.bind(this));
        this.skillsButton.addEventListener('click', this.goToSkills.bind(this));
        this.contactButton.addEventListener('click', this.goToContact.bind(this));
        this.githubButton.addEventListener('click', this.goToGitHub.bind(this));
        this.linkedinButton.addEventListener('click', this.goToLinkedin.bind(this));
        this.locationButton.addEventListener('click', this.goToLocation.bind(this));

        this.highlightButtonHome();
    }

    highlightButtonHome() {
        const classLst = ['border', 'border-light', 'border-1', 'rounded'];

        // clear the highlight off all buttons
        for (const button of this.allButtons) {
            for (const cl of classLst) {
                if (button.classList.contains(cl)) {
                    button.classList.remove(cl);
                }
            }
        }

        // add the highlight to selected button
        for (const cl of classLst) {
            if (!this.homeButton.classList.contains(cl)) {
                this.homeButton.classList.add(cl);
            }
        }
    }
    highlightButtonAbout() {
        const classLst = ['border', 'border-light', 'border-1', 'rounded'];

        // clear the highlight off all buttons
        for (const button of this.allButtons) {
            for (const cl of classLst) {
                if (button.classList.contains(cl)) {
                    button.classList.remove(cl);
                }
            }
        }

        // add the highlight to selected button
        for (const cl of classLst) {
            if (!this.aboutButton.classList.contains(cl)) {
                this.aboutButton.classList.add(cl);
            }
        }
    }
    highlightButtonSkills() {
        const classLst = ['border', 'border-light', 'border-1', 'rounded'];

        // clear the highlight off all buttons
        for (const button of this.allButtons) {
            for (const cl of classLst) {
                if (button.classList.contains(cl)) {
                    button.classList.remove(cl);
                }
            }
        }

        // add the highlight to selected button
        for (const cl of classLst) {
            if (!this.skillsButton.classList.contains(cl)) {
                this.skillsButton.classList.add(cl);
            }
        }
    }
    highlightButtonContact() {
        const classLst = ['border', 'border-light', 'border-1', 'rounded'];

        // clear the highlight off all buttons
        for (const button of this.allButtons) {
            for (const cl of classLst) {
                if (button.classList.contains(cl)) {
                    button.classList.remove(cl);
                }
            }
        }

        // add the highlight to selected button
        for (const cl of classLst) {
            if (!this.contactButton.classList.contains(cl)) {
                this.contactButton.classList.add(cl);
            }
        }
    }
    highlightButtonLocation() {
        const classLst = ['border', 'border-light', 'border-1', 'rounded'];

        // clear the highlight off all buttons
        for (const button of this.allButtons) {
            for (const cl of classLst) {
                if (button.classList.contains(cl)) {
                    button.classList.remove(cl);
                }
            }
        }

        // add the highlight to selected button
        for (const cl of classLst) {
            if (!this.locationButton.classList.contains(cl)) {
                this.locationButton.classList.add(cl);
            }
        }
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
        // this.highlightButtonHome();
        document.getElementById('carouselExampleIndicators').querySelector('.first-indicator').click();
        this.collapseBar();
    }
    goToAbout() {
        // this.highlightButtonAbout();
        document.getElementById('carouselExampleIndicators').querySelector('.second-indicator').click();
        this.collapseBar();
    }
    goToSkills() {
        // this.highlightButtonSkills();
        document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
        this.collapseBar();
    }
    goToContact() {
        // this.highlightButtonContact();
        if (window.innerWidth > 768) {
            document.getElementById('carouselExampleIndicators').querySelector('.third-indicator').click();
        }
        else {
            document.getElementById('carouselExampleIndicators').querySelector('.fourth-indicator').click();
        }
        this.collapseBar();
    }
    goToLocation() {
        // this.highlightButtonLocation();
        document.getElementById('carouselExampleIndicators').querySelector('.fifth-indicator').click();
        this.collapseBar();
    }
    goToGitHub() {
        window.location.href = GITHUB_URL;
        this.collapseBar();
    }
    goToLinkedin() {
        window.location.href = LINKEDIN_URL;
        this.collapseBar();
    }
}