const calByError = (userFunction, limInf, limSup, cantDec, errMin) => {
    let rows = []

    let iteration = 0; let xi; let xu; let xr; let fxi; let fxu; let fxr; let sigfxi; let sigfxu; let sigfxr; let cambio; let error; let resAbs

    let lessThanError = false;

    while (lessThanError == false) {
        iteration += 1;
        let oldXr;
        if (iteration == 1) {
            xi = limInf;
            xu = limSup;
            resAbs = ""
        }
        if (iteration != 1) {
            oldXr = xr;
            if (sigfxi === sigfxr) {
                xi = xr
            } else if (sigfxu === sigfxr) {
                xu = xr
            }
        }
        fxi = userFunction.evaluate({ x: xi });
        fxu = userFunction.evaluate({ x: xu });
        xr = ((xi * fxu) - (xu * fxi)) / (fxu - fxi);
        fxr = userFunction.evaluate({ x: xr });
        fxi > 0 ? sigfxi = "+" : sigfxi = "-";
        fxu > 0 ? sigfxu = "+" : sigfxu = "-";
        fxr > 0 ? sigfxr = "+" : sigfxr = "-";
        if (sigfxi === sigfxr) {
            cambio = /*html*/`<p>x<sub>i</sub> → x<sub>${iteration}</sub></p>`
        } else if (sigfxu === sigfxr) {
            cambio = /*html*/`<p>x<sub>u</sub> → x<sub>${iteration}</sub></p>`
        } else if (sigfxi === sigfxr && sigfxu === sigfxr) {
            console.error("La ecuacion no tiene raiz");
            return;
        } else if (sigfxi != sigfxr && sigfxu != sigfxr) {
            console.error("La ecuacion no tiene raiz");
            return
        }
        if (iteration != 1) {
            resAbs = Math.abs(xr - oldXr)
        }
        error = fxr;

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
        if (iteration != 1) {
            resAbs < errMin ? lessThanError = true : lessThanError = false;
        }
    }
    return rows
}
export default calByError