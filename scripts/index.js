import Variables from "./variables.js"

document.addEventListener("DOMContentLoaded", e => {
    const variables = new Variables

    variables.infoButt.addEventListener("click", e => {
        e.preventDefault()
        e.stopPropagation()
        const modal = variables.infoAPP
        console.log(modal);
        if (modal.style.right === "-100%" || modal.style.right === "") {
            modal.style.right = "0%"
        }else{
            modal.style.right = "-100%"
        }
    })

})