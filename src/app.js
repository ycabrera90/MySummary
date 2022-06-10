import { NavBar } from './UI/NavBar';
import { Carousel } from './UI/Carousel';

class App {
    static init() {
        const navBar = new NavBar();

        const carousel = new Carousel();

        carousel.constactmeForm.onContactMeForm = () => {
            carousel.setItemTime('caroussel-item-contactMe', 10000000)
        }

        carousel.skills.setHtmlTo(25);
        carousel.skills.setCssTo(15);
        carousel.skills.setJsTo(85);
        carousel.skills.setReactTo(15);
        carousel.skills.setNodeTo(45);
        carousel.skills.setPythonTo(95);
        carousel.skills.setPerlTo(85);

        carousel.locationMap.render({ lat: -34.88761217420463, lng: -56.17486101765247 });

    }
}

App.init();




