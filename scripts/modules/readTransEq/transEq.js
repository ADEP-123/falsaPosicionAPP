import Variables from "../../variables.js";
import calByError from "./calByErr.js";
import calByIter from "./calByIter.js";

const transEQ = () => {
    const variables = new Variables()
    variables.restPack()
    variables.clearRows()

    //Verificar que ingresó la informacion necesaria
    variables.limSup.value == "" ? variables.setNewErrorInfo("El limite superior es obligatorio") : "";
    variables.limInf.value == "" ? variables.setNewErrorInfo("El limite inferior es obligatorio") : "";
    if (variables.cantIter.value == "" && variables.errMin.value == "") {
        variables.setNewErrorInfo("Debe llenar o la cantidad de iteraciones o el error minimo necesario")
    }

    try {
        // Interpretar la ecuación utilizando Math.js
        const userFunction = math.compile(variables.userEq);
        if (variables.cantIter.value ? true : false) {
            //Funcion para calcular las filas
            variables.setRows(calByIter(
                userFunction,
                variables.limInf.value,
                variables.limSup.value,
                variables.cantDec.value,
                variables.cantIter.value
            ))
            // console.log(variables.rows);
        } else if (variables.errMin.value ? true : false) {
            variables.setRows(calByError(
                userFunction,
                variables.limInf.value,
                variables.limSup.value,
                variables.cantDec.value,
                variables.errMin.value
            ))
            // console.log(variables.rows);
        } else {

        }

    } catch (error) {
        variables.setNewErrorInfo("Error en la escritura de la ecuacion")
    }

}
export default transEQ