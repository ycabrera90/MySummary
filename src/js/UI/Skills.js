export class Skills {
    constructor() {

        this.oppenedSkillInfo = null;

        this.caroussel = document.getElementById('carouselExampleIndicators');
        this.contentSkillHtml = document.getElementById('_contentSkillHtml');
        this.skillInfo = document.getElementById('_skillInfo');



        this.contentSkill = document.querySelector('._content__skill');
        this.skillBackdrop = document.getElementById('_skillBackdrop');

        this.contentSkill.addEventListener('click', event => {
            // detect if was clicked the backdrop or a skill element
            if (event.target.classList.contains('_content-backdrop')) {
                console.log('here');
                this.hideSkillInfo(this.oppenedSkillInfo);
            }
            else {
                this.showSkillInfo(event.target.closest('._skill-container'));
            }
        })

        // this.skillBackdrop.addEventListener('click', this.hideSkillInfo.bind(this, this.oppenedSkillInfo))

        // this.skillBackdrop.click = this.hideSkillInfo.bind(this, this.oppenedSkillInfo);
        // this.skillBackdrop.addEventListener('click', this.hideSkillInfo.bind(this));



    }

    setProgres(skillClass, progress) {
        // scan all skills for both small and large screens
        for (const skill of this.caroussel.querySelectorAll(`.${skillClass} .progress-bar`)) {
            skill.style.width = `${progress}%`;
        }
    }

    showSkillInfo(DomSkill) {
        if (!this.oppenedSkillInfo) {
            const skillInfo = DomSkill.querySelector('._skill-info');

            // Calculate the best position of the element in the screen after translate
            const translateX = (innerWidth / 2) - (DomSkill.getBoundingClientRect().left + DomSkill.clientWidth / 2);
            const translateY = (innerHeight / 4.25) - DomSkill.getBoundingClientRect().top;

            DomSkill.style = `  transition: transform 500ms 0s ease-out;
                                transform: translate(${translateX}px, ${translateY}px);
                                cursor: auto;
                                z-index: 2`;

            skillInfo.style = ` display: block`;
            setTimeout(() => {
                skillInfo.style = ` transition: height 500ms 0.5s ease-out, opacity 500ms 0.5s ease-out;
                                    height: 12.5rem; 
                                    opacity: 1;
                                    z-index: 2;
                                    display: block`;
            }, 1);

            this.skillBackdrop.style = `display: block;
                                        z-index: 1`;

            this.oppenedSkillInfo = DomSkill;           // enable a flag for say which skill is oppened
        }
    }

    hideSkillInfo(DomSkill) {
        if (this.oppenedSkillInfo) {
            const skillInfo = DomSkill.querySelector('._skill-info');

            this.skillBackdrop.style = `display: none`;

            skillInfo.style = ` transition: height 500ms 0s ease-out, opacity 500ms 0s ease-out;
                                height: 0rem; 
                                opacity: 0;
                                z-index: 0;
                                display: block`;
            setTimeout(() => {
                skillInfo.style = ` display: none`;
            }, 500);

            DomSkill.style = `  transition: transform 500ms 0.5s ease-out;
                                transform: translate(0px, 0px);
                                cursor: pointer`;

            this.oppenedSkillInfo = null;           // enable a flag for say which skill is oppened
        }






    }
}