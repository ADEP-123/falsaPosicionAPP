import Variables from "../../variables.js"

const clearIterations = () =>{
    const variables = new Variables
    variables.iteSelect.innerHTML = /*html*/`<option value="0">Iteracion</option>`
}
export default clearIterations