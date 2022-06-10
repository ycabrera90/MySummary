import { ContacMeForm } from "./ContacmeForm";
import { Map } from './Map';
import { Skills } from './Skills';



export class Carousel {
    constructor() {
        new ContacMeForm();

        new Map().render({ lat: -34.88761217420463, lng: -56.17486101765247 });

        this.skills = new Skills();
        // this.skills.setHtmlTo(25);
        // this.skills.setCssTo(15);
        // this.skills.setJsTo(85);
        // this.skills.setReactTo(15);
        // this.skills.setNodeTo(45);
        // this.skills.setPythonTo(95);
        // this.skills.setPerlTo(85);



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

    setItemTime(itemId, msTime) {
        this.caroussel.querySelector(`#${itemId}`).setAttribute("data-bs-interval", `${msTime}`);
    }
}