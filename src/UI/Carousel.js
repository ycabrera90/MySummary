import { ContacMeForm } from "./ContacmeForm";
import { Map } from './Map';
import { Skills } from './Skills';





export class Carousel {
    constructor() {
        this.slice = 'caroussel-item-home';

        this.constactmeForm = new ContacMeForm();
        this.locationMap = new Map();
        this.skills = new Skills();

        this.onHome = () => { };       // method that execute a callback function when the user is on Home slide
        this.onAboutMe = () => { };    // method that execute a callback function when the user is on AboutMe slide
        this.onMySkills = () => { };   // method that execute a callback function when the user is on MySkills slide
        this.onContactMe = () => { };  // method that execute a callback function when the user is on ContactMe slide
        this.onMyLocation = () => { }; // method that execute a callback function when the user is on MyLocation slide

        this.caroussel = document.getElementById('carouselExampleIndicators');

        this.allIndicators = this.caroussel.querySelectorAll('.carousel-indicators button');
        this.showHideIndicators = this.caroussel.querySelectorAll(".showHide-indicator");
        this.mainIndicatior = this.caroussel.querySelector('.first-indicator');

        this.allCarousselItems = this.caroussel.querySelectorAll('.carousel-item');
        this.showHideCarousselItems = this.caroussel.querySelectorAll('#caroussel-item-mySkills, #caroussel-item-myLocation');
        this.mainCarousselItem = this.caroussel.querySelector('#caroussel-item-home');

        this.itemHome = this.mainCarousselItem;
        this.itemAboutMe = this.caroussel.querySelector('#caroussel-item-aboutMe');
        this.itemMySkills = this.caroussel.querySelector('#caroussel-item-mySkills');
        this.itemContacMe = this.caroussel.querySelector('#caroussel-item-contactMe');
        this.itemMyLocation = this.caroussel.querySelector('#caroussel-item-myLocation');

        // 
        this.itemHome.addEventListener('mouseover', this.onHomeFunctionHandler.bind(this));
        this.itemAboutMe.addEventListener('mouseover', this.onAboutMeFunctionHandler.bind(this));
        this.itemMySkills.addEventListener('mouseover', this.onMySkillsFunctionHandler.bind(this));
        this.itemContacMe.addEventListener('mouseover', this.onContactMeFunctionHandler.bind(this));
        this.itemMyLocation.addEventListener('mouseover', this.onMyLocationFunctionHandler.bind(this));

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

    setItemTime(itemId, msTime) {
        console.log('entre a lostiempos')
        this.caroussel.querySelector(`#${itemId}`).setAttribute("data-bs-interval", `${msTime}`);
    }

    onHomeFunctionHandler() {
        if (!(this.slice === 'caroussel-item-home')) {
            this.slice = 'caroussel-item-home';
            this.onHome();
        }
    }
    onAboutMeFunctionHandler() {
        if (!(this.slice === 'caroussel-item-aboutMe')) {
            this.slice = 'caroussel-item-aboutMe';
            this.onAboutMe();
        }
    }
    onMySkillsFunctionHandler() {
        if (!(this.slice === 'caroussel-item-mySkills')) {
            this.slice = 'caroussel-item-mySkills';
            this.onMySkills();
        }
    }
    onContactMeFunctionHandler() {
        if (!(this.slice === 'caroussel-item-contactMe')) {
            this.slice = 'caroussel-item-contactMe';
            this.onContactMe();
        }
    }
    onMyLocationFunctionHandler() {
        if (!(this.slice === 'caroussel-item-myLocation')) {
            this.slice = 'caroussel-item-myLocation';
            this.onMyLocation();
        }
    }


}