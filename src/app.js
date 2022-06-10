import { NavBar } from './UI/NavBar';
import { Carousel } from './UI/Carousel';

class App {
    static init() {
        const navBar = new NavBar();
        const carousel = new Carousel();

        carousel.skills.setHtmlTo(25);
        carousel.skills.setCssTo(15);
        carousel.skills.setJsTo(85);
        carousel.skills.setReactTo(15);
        carousel.skills.setNodeTo(45);
        carousel.skills.setPythonTo(95);
        carousel.skills.setPerlTo(85);
      
    }
}

App.init();




