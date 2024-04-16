import clearIterations from "./clearIterations.js";
import clearPage from "./clearPage.js";

const depErrorMessages = (errArr, errDiv) => {
    clearPage()
    clearIterations()

    let concat = /*html*/`
    <h1>Error</h1>
    <img src="images/error.gif" class="errImg">
    `
    errArr.forEach(element => {
        concat += /*html*/`
        <p class="errorMessage">${element}</p>
        `
    });

    errDiv.innerHTML = "";
    errDiv.innerHTML = concat;
    errDiv.style.display = "flex"
}
export default depErrorMessages