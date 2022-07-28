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
        const vpWidth = window.innerWidth;
        console.log('vpWidth', vpWidth);
        const vpHeight = window.innerHeight;
        console.log('vpHeight', vpHeight);

        const contentSkillHtmlTop = this.contentSkillHtml.getBoundingClientRect().top;
        console.log('contentSkillHtml.top', contentSkillHtmlTop);
        const contentSkillHtmlLeft = this.contentSkillHtml.getBoundingClientRect().left;
        console.log('contentSkillHtml.left', contentSkillHtmlLeft);
        const contentSkillHtmlWidth = this.contentSkillHtml.getBoundingClientRect().width;
        console.log('contentSkillHtml.widht', contentSkillHtmlWidth);

        const translateX = (vpWidth / 2) - (contentSkillHtmlLeft + contentSkillHtmlWidth / 2);
        console.log('translateX', translateX);

        const translateY = (vpHeight / 4.25) - contentSkillHtmlTop;
        console.log('translateY', translateY);







        // // this.contentSkillHtml.style = "z-index: 1; animation: skillAnimationExpand 500ms 0s ease-out 1 both; cursor: auto";
        this.contentSkillHtml.style = `z-index: 1; transform: translate(${translateX}px, ${translateY}px); cursor: auto`;
        this.skillInfo.style = "animation: skillInfoAnimationExpand  500ms 0.5s ease-out 1 both; cursor: auto";
        this.skillBackdrop.style = "display: block";
    }

    hideSkillInfo() {
        this.skillInfo.style = "animation: skillInfoAnimationCollapse  500ms 0s ease-out 1 both;";
        this.contentSkillHtml.style = "z-index: 1; animation: skillAnimationCollapse 500ms 0.5s ease-out 1 both";
        this.skillBackdrop.style = "display: none";
    }

}