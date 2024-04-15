import Variables from "../../variables.js";

const transEQ = () => {
    // Interpretar la ecuación utilizando Math.js
    const variables = new Variables()
    try {
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