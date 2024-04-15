const calByIter = (userFunction, limInf, limSup, cantDec, cantIter) => {
    let rows = []
    // const result = userFunction.evaluate({ x: 1 });
    // console.log({
    //     Value: userEq,
    //     Result: result
    // });
    let iteration; let xi; let xu; let xr; let fxi; let fxu; let fxr; let sigfxi; let sigfxu; let sigfxr; let cambio; let error; let resAbs
    for (let i = 0; i < cantIter; i++) {
        iteration = i + 1;
        if (iteration == 1) {
            xi = limInf;
            xu = limSup;
        } else {
            if (sigfxi === sigfxr) {
                xi = xr;
                cambio = /*html*/`<p>x<sub>i</sub> → x<sub>${iteration}</sub></p>`
            } else if (sigfxu === sigfxr) {
                xu = xr;
                cambio = /*html*/`<p>x<sub>u</sub> → x<sub>${iteration}</sub></p>`
            } else {
                console.error("La ecuacion no tiene raiz");
                return;
            }
        }
        fxi = userFunction.evaluate({ x: xi });
        fxu = userFunction.evaluate({ x: xu });
        const oldXr = xr;
        xr = ((xi * fxu) - (xu * fxi)) / (fxu - fxi);
        fxr = userFunction.evaluate({ x: xr });
        fxi > 0 ? sigfxi = "+" : sigfxi = "-";
        fxu > 0 ? sigfxu = "+" : sigfxu = "-";
        fxr > 0 ? sigfxr = "+" : sigfxr = "-";
        error = fxr;
        iteration == 1 ? resAbs = "" : resAbs = (Math.abs(xr - oldXr));

        rows.push({
            iteration,
            xi: Number(xi).toFixed(cantDec),
            xu: Number(xu).toFixed(cantDec),
            xr: Number(xr).toFixed(cantDec),
            fxi: Number(fxi).toFixed(cantDec),
            fxu: Number(fxu).toFixed(cantDec),
            fxr: Number(fxr).toFixed(cantDec),
            sigfxi,
            sigfxu,
            sigfxr,
            cambio,
            error: Number(error).toFixed(cantDec),
            resAbs: Number(resAbs).toFixed(cantDec)
        })
    }
    return rows

}
export default calByIter