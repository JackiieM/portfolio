import data from "./projects.js"
// Variables de data
const titles = data.projects.map(data => data.name);
const descriptions = data.projects.map(data => data.about);
const dates = data.projects.map(data => data.time);
const pictures = data.projects.map(data => data.image);
const demoLinks = data.projects.map(data => data.demo);
const repoLinks = data.projects.map(data=> data.repo);
const toolsArr = data.projects.map(data => data.tools);

