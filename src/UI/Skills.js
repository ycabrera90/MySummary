export class Skills {
    constructor() {
        this.caroussel = document.getElementById('carouselExampleIndicators');
        this.setProgres('_content__skill--html',10);
    }

    setProgres(skillClass, progress) {
        this.caroussel.querySelector(`.${skillClass} .progress-bar`).style.width = `${progress}%`;
    }
}