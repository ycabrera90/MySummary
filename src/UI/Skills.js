export class Skills {
    constructor() {
        this.caroussel = document.getElementById('carouselExampleIndicators');
        this.setProgres('_content__skill--html', 10);
    }

    setProgres(skillClass, progress) {
        // scan all skills for both small and large screens
        for (const skill of this.caroussel.querySelectorAll(`.${skillClass} .progress-bar`)) {
            skill.style.width = `${progress}%`;
        }
    }
}