import { ContacMeForm } from "./ContacmeForm";
import { Map } from './Map';
import { Skills } from './Skills';
import { Touch } from "../Utility/Touch.js";





export class Carousel {
    constructor() {
        this.slice = 'caroussel-item-home';
        this.updateSlice();

        this.onHome = () => { };       // method that execute a callback function when the user is on Home slide
        this.onAboutMe = () => { };    // method that execute a callback function when the user is on AboutMe slide
        this.onMySkills = () => { };   // method that execute a callback function when the user is on MySkills slide
        this.onContactMe = () => { };  // method that execute a callback function when the user is on ContactMe slide
        this.onMyLocation = () => { }; // method that execute a callback function when the user is on MyLocation slide

        this.caroussel = document.getElementById('carouselExampleIndicators');

        this.constactmeForm = new ContacMeForm();
        this.locationMap = new Map();
        this.skills = new Skills();
        this.touch = new Touch(this.caroussel);     // add touch event to carousel

        this.allIndicators = this.caroussel.querySelectorAll('.carousel-indicators button');
        this.mainIndicatior = this.caroussel.querySelector('.first-indicator');

        this.allCarousselItems = this.caroussel.querySelectorAll('.carousel-item');
        this.showHideCarousselItems = this.caroussel.querySelectorAll('#caroussel-item-mySkills, #caroussel-item-myLocation');
        this.mainCarousselItem = this.caroussel.querySelector('#caroussel-item-home');

        this.itemHome = this.mainCarousselItem;
        this.itemAboutMe = this.caroussel.querySelector('#caroussel-item-aboutMe');
        this.itemMySkills = this.caroussel.querySelector('#caroussel-item-mySkills');
        this.itemContacMe = this.caroussel.querySelector('#caroussel-item-contactMe');
        this.itemMyLocation = this.caroussel.querySelector('#caroussel-item-myLocation');

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

        // Touch events
        // detect slide right
        this.touch.slideRight = () => {
            this.goToPrevSlide();
        }
        // detect slide left
        this.touch.slideLeft = () => {
            this.goToNextSlide();
        }
    }
    updateSlice() {
        setInterval(() => {
            // check which slide is active and save it id
            for (const item of this.allCarousselItems) {
                if (item.classList.contains('active')) {
                    this.slice = item.id;
                }
            }

            // run the function handler in base to active slide
            if (this.slice === 'caroussel-item-home') {
                this.onHomeFunctionHandler(this);
            } else if (this.slice === 'caroussel-item-aboutMe') {
                this.onAboutMeFunctionHandler(this);
            } else if (this.slice === 'caroussel-item-mySkills') {
                this.onMySkillsFunctionHandler(this);
            } else if (this.slice === 'caroussel-item-contactMe') {
                this.onContactMeFunctionHandler(this);
            } else if (this.slice === 'caroussel-item-myLocation') {
                this.onMyLocationFunctionHandler(this);
            }
        }, 500)
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
        this.caroussel.querySelector(`#${itemId}`).setAttribute("data-bs-interval", `${msTime}`);
    }

    goToNextSlide() {
        this.caroussel.querySelector('.carousel-control-next').click();
    }
    goToPrevSlide() {
        this.caroussel.querySelector('.carousel-control-prev').click();
    }

    onHomeFunctionHandler() {
        this.onHome();
    }
    onAboutMeFunctionHandler() {
        this.onAboutMe();
    }
    onMySkillsFunctionHandler() {
        this.onMySkills();
    }
    onContactMeFunctionHandler() {
        this.onContactMe();
    }
    onMyLocationFunctionHandler() {
        this.onMyLocation();
    }


}