import { NavBar } from './UI/NavBar';
import { Carousel } from './UI/Carousel';

class App {
    static init() {
        const navBar = new NavBar();
        const carousel = new Carousel();

        // I put a long time for the slide of the form when working on it.
        carousel.constactmeForm.fillingContacteForm = () => {
            carousel.setItemTime('caroussel-item-contactMe', 10000000)
        }

        // I restar the time for the contact for when we are on others slides
        carousel.onHome = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            navBar.highlightButtonHome();
        }
        carousel.onAboutMe = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            navBar.highlightButtonAbout();

        }
        carousel.onMySkills = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            navBar.highlightButtonSkills();
        }
        carousel.onContactMe = () => {
            navBar.highlightButtonContact();
        }
        carousel.onMyLocation = () => {
            carousel.setItemTime('caroussel-item-contactMe', 8000);
            navBar.highlightButtonLocation();
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




