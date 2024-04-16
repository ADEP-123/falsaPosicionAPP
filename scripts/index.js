import depErrorMessages from "./modules/errorMessages/depErrorMessages.js"
import showModal from "./modules/infoAPP/showModal.js"
import concatBoard from "./modules/readTransEq/concatBoard.js"
import formatEquation from "./modules/readTransEq/formatEq.js"
import transEQ from "./modules/readTransEq/transEq.js"
import showInfo from "./modules/showInfo/showInfo.js"
import Variables from "./variables.js"

document.addEventListener("DOMContentLoaded", e => {
    const variables = new Variables

    // Event to deploy and hide modal window about how to use the APP
    variables.infoButt.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        const modal = variables.infoAPP
        const otherModal = variables.calcBoard
        showModal(modal, otherModal)
    })

    // Event to recolect user info and translate it
    variables.calcButton.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()

        variables.clearErrorInfo()

        variables.setUserEq(variables.userEqInput.value.toLowerCase())
        // console.log(variables.userEqInput.value.toLowerCase());
        transEQ()

        if (variables.errInfo.length != 0) {
            // console.log(variables.errDiv);
            depErrorMessages(variables.errInfo, variables.errDiv);
        } else {
            variables.errDiv.style.display = "none";
            const formattedEquation = formatEquation(variables.userEq)
            variables.transEqInput.innerHTML = `${formattedEquation}`
            showInfo(variables.rows)
        }


    })

    //Evento to show calculator board
    variables.calcBoardButton.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        const modal = variables.calcBoard
        const otherModal = variables.infoAPP
        showModal(modal, otherModal)
    })

    //Evento para manejar el tablero
    variables.calcBoard.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        concatBoard(e.target, variables.userEqInput)
    })

    variables.cantIter.addEventListener("change", e => {
        e.preventDefault();
        e.stopPropagation();

        if (variables.errMin.value != "" && variables.errMin.value != null) {
            variables.errMin.value = "";
        }
    })

    variables.errMin.addEventListener("change", e => {
        e.preventDefault();
        e.stopPropagation();

        if (variables.cantIter.value != "" && variables.cantIter.value != null) {
            variables.cantIter.value = "";
        }
    })

})