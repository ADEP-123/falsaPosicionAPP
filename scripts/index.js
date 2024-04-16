import depErrorMessages from "./modules/errorMessages/depErrorMessages.js"
import showModal from "./modules/infoAPP/showModal.js"
import concatBoard from "./modules/readTransEq/concatBoard.js"
import formatEquation from "./modules/readTransEq/formatEq.js"
import transEQ from "./modules/readTransEq/transEq.js"
import createIterations from "./modules/showInfo/createIterations.js"
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
        variables.restPack()

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
            variables.showedIter.innerHTML = `Iteraciones 1-${variables.rowsQuant}`
            //ecuaciones para navegar entre paquetes de resultados
            if (variables.rowsQuant > 10) {
                showInfo(variables.rows, variables.actualIndexIt, 10)
                //Agregando evento a los botones de cambio de cantidad de iteraciones
                variables.showedIter.innerHTML = `Iteraciones 1-10`
                variables.nextPackIt.addEventListener("click", e => {
                    e.preventDefault();
                    e.stopPropagation();
                    variables.nexPack();
                    if (variables.actualIndexIt + 10 <= variables.rowsQuant) {
                        showInfo(variables.rows, variables.actualIndexIt, 10);
                        variables.showedIter.innerHTML = `Iteraciones ${variables.actualIndexIt + 1}-${variables.actualIndexIt + 10}`
                    } else if ((variables.actualIndexIt + 10 - variables.rowsQuant) > 0) {
                        showInfo(variables.rows, variables.actualIndexIt, 10);
                        variables.showedIter.innerHTML = `Iteraciones ${variables.actualIndexIt + 1}-${variables.rowsQuant}`
                    }
                })

                variables.befPackIt.addEventListener("click", e => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (variables.actualIndexIt - 10 >= 0) {
                        variables.befPack();
                        showInfo(variables.rows, variables.actualIndexIt, 10);
                        variables.showedIter.innerHTML = `Iteraciones ${variables.actualIndexIt + 1}-${variables.actualIndexIt + 10}`
                    }
                })
            } else {
                showInfo(variables.rows, 0, 10)
            }
            //ecuacion para mostrar una iteracion en especifico
            createIterations(variables.iteSelect, variables.rowsQuant)
            variables.showIteInfoButt.addEventListener("click", e => {
                e.preventDefault();
                e.stopPropagation();
                // console.log(variables.iteSelect.value);
                if (variables.iteSelect.value != "0") {
                    showInfo(variables.rows, variables.iteSelect.value - 1, 1)
                    variables.showedIter.innerHTML = `Iteracion ${variables.iteSelect.value}`
                }
            })


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