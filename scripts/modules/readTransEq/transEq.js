const transEQ = (userEq) => {
    // Interpretar la ecuación utilizando Math.js
    const userFunction = math.compile(userEq);



    const result = userFunction.evaluate({ x: 1 });

    // console.log({
    //     Value: userEq,
    //     Result: result
    // });
}
export default transEQ