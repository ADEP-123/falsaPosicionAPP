import formatEquation from "./modules/readTransEq/formatEq.js"
import transEQ from "./modules/readTransEq/transEq.js"
import Variables from "./variables.js"

document.addEventListener("DOMContentLoaded", e => {
    const variables = new Variables

    // Event to deploy and hide modal window about how to use the APP
    variables.infoButt.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        const modal = variables.infoAPP
        // console.log(modal);
        if (modal.style.right === "-100%" || modal.style.right === "") {
            modal.style.right = "0%"
        } else {
            modal.style.right = "-100%"
        }
    })

    // Event to recolect user info and translate it
    variables.calcButton.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        variables.setUserEq(variables.userEqInput.value.toLowerCase())
        try {
            transEQ(variables.userEq)
            const formattedEquation = formatEquation(variables.userEq)
            variables.transEqInput.innerHTML = `${formattedEquation}`
        } catch (error) {
            variables.setNewErrorInfo("Error en la escritura de la ecuacion");
        }
    })

})