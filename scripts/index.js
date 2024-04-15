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
            // Interpretar la ecuación utilizando Math.js
            const userFunction = math.compile(variables.userEq);

            const result = userFunction.evaluate({ x: 1 });

            console.log({
                Value: variables.userEq,
                Result: result
            });
        } catch (error) {
            variables.setNewErrorInfo("Error en la escritura de la ecuacion");
            console.error("Error en la escritura de la ecuacion");
        }

    })

})