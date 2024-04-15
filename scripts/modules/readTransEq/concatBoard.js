const concatBoard = (target, input) => {
    const posicion = input.selectionStart;

    if (target.tagName == "BUTTON") {
        let actualEq = input.value
        let concatElm = ""
        switch (target.id) {
            case "potButton":
                concatElm = "^";
                break;
            case "piButton":
                concatElm = "pi";
                break;
            case "eulBoutton":
                concatElm = "e";
                break;
            case "senButton":
                concatElm = "sin()";
                break;
            case "cosButton":
                concatElm = "cos()";
                break;
            case "tanButton":
                concatElm = "tan()";
                break;
            case "cotanButton":
                concatElm = "cot()";
                break;
            case "logButton":
                concatElm = "log(a,b)";
                break;
            case "piButton":
                concatElm = "π";
                break;
            default:
                break;
        }
        const nuevoTexto = actualEq.slice(0, posicion) + concatElm + actualEq.slice(posicion);
        input.value = nuevoTexto

        // Mover el cursor a la posición después del valor insertado
        input.selectionStart = input.selectionEnd = posicion + concatElm.length;
    }

}
export default concatBoard