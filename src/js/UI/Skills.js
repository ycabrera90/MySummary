export class Skills {
    constructor() {

        this.caroussel = document.getElementById('carouselExampleIndicators');
        this.contentSkillHtml = document.getElementById('_contentSkillHtml');
        this.skillInfo = document.getElementById('_skillInfo');
        this.skillBackdrop = document.getElementById('_skillBackdrop');

        // this.setProgres('_content__skill--html', 10);
        // console.log('dfadf');


        this.contentSkillHtml.addEventListener('click', this.showSkillInfo.bind(this));
        this.skillBackdrop.addEventListener('click', this.hideSkillInfo.bind(this));



    }

    setProgres(skillClass, progress) {
        // scan all skills for both small and large screens
        for (const skill of this.caroussel.querySelectorAll(`.${skillClass} .progress-bar`)) {
            skill.style.width = `${progress}%`;
        }
    }

    showSkillInfo() {
        console.dir(this.contentSkillHtml.getBoundingClientRect() );
        // console.dir(window.innerHeight);
        console.dir(window.innerWidth);
        const translateX = window.innerWidth/2-(this.contentSkillHtml.getBoundingClientRect().left+this.contentSkillHtml.getBoundingClientRect().width);
        console.log('traslateX',translateX)

        // this.contentSkillHtml.style = "z-index: 1; animation: skillAnimationExpand 500ms 0s ease-out 1 both; cursor: auto";
        this.contentSkillHtml.style = "z-index: 1; transform: translate(-228px, -43px); cursor: auto";
        this.skillInfo.style = "animation: skillInfoAnimationExpand  500ms 0.5s ease-out 1 both; cursor: auto";
        this.skillBackdrop.style = "display: block";
    }

    hideSkillInfo() {
        this.skillInfo.style = "animation: skillInfoAnimationCollapse  500ms 0s ease-out 1 both;";
        this.contentSkillHtml.style = "z-index: 1; animation: skillAnimationCollapse 500ms 0.5s ease-out 1 both";
        this.skillBackdrop.style = "display: none";
    }

}