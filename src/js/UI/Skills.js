export class Skills {
    constructor() {

        this.caroussel = document.getElementById('carouselExampleIndicators');
        this.contentSkillHtml = document.getElementById('_contentSkillHtml');
        this.skillInfo = document.getElementById('_skillInfo');
        this.skillBackdrop = document.getElementById('_skillBackdrop');
        // this.skillBackdrop.classList.contains()

        this.allSkillContainer = document.querySelectorAll('._skill-container');
        for (const skillContainer of this.allSkillContainer) {
            skillContainer.addEventListener('click', (event) => {

                for (const dom of event.path) {
                    if (dom !== undefined) {
                        console.dir(dom);

                    }

                    // if (dom.classList.length != 0) {
                    // console.log(dom.classList);

                    // }

                    // if (dom.classList.contains('_skill-container')){
                    //     console.log(dom.classList);
                    // }
                }
            });
        }


        this.contentSkillHtml.addEventListener('click', this.showSkillInfo.bind(this));
        this.skillBackdrop.addEventListener('click', this.hideSkillInfo.bind(this));

        console.log(this.allSkillContainer)


    }

    setProgres(skillClass, progress) {
        // scan all skills for both small and large screens
        for (const skill of this.caroussel.querySelectorAll(`.${skillClass} .progress-bar`)) {
            skill.style.width = `${progress}%`;
        }
    }

    showSkillInfo() {
        // Calculate the best position of the element in the screen after translate
        const translateX = (innerWidth / 2) - (this.contentSkillHtml.getBoundingClientRect().left + this.contentSkillHtml.clientWidth / 2);
        const translateY = (innerHeight / 4.25) - this.contentSkillHtml.getBoundingClientRect().top;

        this.contentSkillHtml.style = ` transition: transform 500ms 0s ease-out;
                                        transform: translate(${translateX}px, ${translateY}px);
                                        z-index: 1;
                                        cursor: auto`;

        this.skillInfo.style = `transition: height 500ms 0.5s ease-out, opacity 500ms 0.5s ease-out;
                                height: 12.5rem; 
                                opacity: 1; 
                                cursor: auto`;

        this.skillBackdrop.style = `display: block`;
    }

    hideSkillInfo() {
        this.skillBackdrop.style = `display: none`;

        this.skillInfo.style = `transition: height 500ms 0s ease-out, opacity 500ms 0s ease-out;
                                height: 0rem; 
                                opacity: 0; 
                                cursor: pointer`;

        this.contentSkillHtml.style = ` transition: transform 500ms 0.5s ease-out;
                                        transform: translate(0rem, 0rem);
                                        z-index: 0;
                                        cursor: pointer`;

    }

}