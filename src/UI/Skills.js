export class Skills {
    constructor() {
        this.caroussel = document.getElementById('carouselExampleIndicators');

        this.skillHtml = this.caroussel.querySelectorAll('.skills-container .html .progress-bar');
        this.skillCss = this.caroussel.querySelectorAll('.skills-container .css .progress-bar');
        this.skillJs = this.caroussel.querySelectorAll('.skills-container .js .progress-bar');
        this.skillReact = this.caroussel.querySelectorAll('.skills-container .react .progress-bar');
        this.skillNode = this.caroussel.querySelectorAll('.skills-container .node .progress-bar');
        this.skillPython = this.caroussel.querySelectorAll('.skills-container .python .progress-bar');
        this.skillPerl = this.caroussel.querySelectorAll('.skills-container .perl .progress-bar');
    }

    setHtmlTo(progress) {
        for (const skill of this.skillHtml) {
            skill.style.width = `${progress}%`;
        }
    }
    setCssTo(progress) {
        for (const skill of this.skillCss) {
            skill.style.width = `${progress}%`;
        }
    }
    setJsTo(progress) {
        for (const skill of this.skillJs) {
            skill.style.width = `${progress}%`;
        }
    }
    setReactTo(progress) {
        for (const skill of this.skillReact) {
            skill.style.width = `${progress}%`;
        }
    }
    setNodeTo(progress) {
        for (const skill of this.skillNode) {
            skill.style.width = `${progress}%`;
        }
    }
    setPythonTo(progress) {
        for (const skill of this.skillPython) {
            skill.style.width = `${progress}%`;
        }
    }
    setPerlTo(progress) {
        for (const skill of this.skillPerl) {
            skill.style.width = `${progress}%`;
        }
    }
}