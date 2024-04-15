import Variables from "../../variables.js";

const transEQ = () => {
    const variables = new Variables()

    //Verificar que ingresó la informacion necesaria
    variables.limSup.value == "" ? variables.setNewErrorInfo("El limite superior es obligatorio") : "";
    variables.limInf.value == "" ? variables.setNewErrorInfo("El limite inferior es obligatorio") : "";
    if (variables.cantIter.value == "" && variables.errMin.value == "") {
        variables.setNewErrorInfo("Debe llenar o la cantidad de iteraciones o el error minimo necesario")
    }

    try {
        // Interpretar la ecuación utilizando Math.js
        const userFunction = math.compile(variables.userEq);
        const result = userFunction.evaluate({ x: 1 });
        console.log({
            Value: userEq,
            Result: result
        });
    } catch (error) {
        variables.setNewErrorInfo("Error en la escritura de la ecuacion")
    }

}
export default transEQ