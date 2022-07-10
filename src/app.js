// import { NavBar } from './UI/NavBar';
import { MainHeader } from './UI/mainHeader';
import { Carousel } from './UI/Carousel';

class App {
    static init() {
        const mainHeader = new MainHeader();

        const carousel = new Carousel();

        // I put a long time for the slide of the form when working on it.
        carousel.constactmeForm.fillingContacteForm = () => {
            carousel.setItemTime('caroussel-item-contactMe', 10000000)
        }

        // I restar the time for the contact for when we are on others slides
        carousel.onHome = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            mainHeader.highlightItem('main-nav__item--home');
        }
        carousel.onAboutMe = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            mainHeader.highlightItem('main-nav__item--about');
        }
        carousel.onMySkills = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            mainHeader.highlightItem('main-nav__item--skills');
        }
        carousel.onContactMe = () => {
            mainHeader.highlightItem('main-nav__item--contact');

        }
        carousel.onMyLocation = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            mainHeader.highlightItem('main-nav__item--location');
        }

        // set my skills
        carousel.skills.setHtmlTo(30);
        carousel.skills.setCssTo(30);
        carousel.skills.setJsTo(95);
        carousel.skills.setReactTo(15);
        carousel.skills.setNodeTo(50);
        carousel.skills.setPythonTo(85);
        carousel.skills.setPerlTo(80);

        // I put my location on google map
        carousel.locationMap.render({ lat: -34.88761217420463, lng: -56.17486101765247 });

    }
}

App.init();




