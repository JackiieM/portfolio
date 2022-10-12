import data from "./projects.js"
// Variables de data
const allProjects = data.projects
console.log(allProjects)
const titles = data.projects.map(data => data.name);
const descriptions = data.projects.map(data => data.about);
const dates = data.projects.map(data => data.time);
const pictures = data.projects.map(data => data.image);
const demoLinks = data.projects.map(data => data.demo);
const repoLinks = data.projects.map(data=> data.repo);
const toolsArr = data.projects.map(data => data.tools);
let projectCards = "";
let toolsCards = "";



window.addEventListener("load", createProjectCards);
function createProjectCards() {
    document.getElementById("mainDataCont").innerHTML = "";
    for(let i = 0; i < allProjects.length; i++){
        projectCards = `
        <div id="projectCont">
        <div id="titleCont">
            <h1>${titles[i]}</h1>
        </div>
        <div id="projectBodyCont">
            <div id="projectImg"><img  src="${pictures[i]}"></div>
            <div id="projectInfoCont">
                <p>${descriptions[i]}</p>
                <div id="tools">
                </div>
                <div id="btnCont">
                    <a class="linkBtn" href="${demoLinks[i]}"><button>Demo</button></a>
                    <a class="linkBtn" href="${repoLinks[i]}"><button>Repo</button></a>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById("mainDataCont").innerHTML += projectCards;

    }

}