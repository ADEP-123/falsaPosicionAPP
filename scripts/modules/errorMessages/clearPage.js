import Variables from "../../variables.js";

const clearPage = () => {
    const variables = new Variables
    const panelDiv = document.querySelector(".tableRowsDiv");
    panelDiv.querySelectorAll(".tableRowDiv").forEach(element => {
        element.id != "row0" ? panelDiv.removeChild(element) : null;
    });

    const oldRow = document.querySelector("#row0")
    oldRow.style.display = "flex"
    variables.clearRows()
}
export default clearPage