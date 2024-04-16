const showInfo = (rows, indice, max) => {
    const panelDiv = document.querySelector(".tableRowsDiv");
    panelDiv.querySelectorAll(".tableRowDiv").forEach(element => {
        element.id != "row0" ? panelDiv.removeChild(element) : null;
    });

    const oldRow = document.querySelector("#row0")
    oldRow.style.display = "none"
    let lastRowNum = 0;
    for (let i = indice; i <= indice + max - 1; i++) {
        if (i >= rows.length) {
            return;
        }
        const element = rows[i]
        const lastRow = document.querySelector(`#row${lastRowNum}`);
        const div = oldRow.cloneNode(true);
        div.style.display = "flex";
        div.id = `row${element.iteration}`
        const ps = div.querySelectorAll("p");
        ps[0].innerHTML = `${element.iteration}`
        ps[1].innerHTML = `${element.xi}`
        ps[2].innerHTML = `${element.xu}`
        ps[3].innerHTML = `${element.xr}`
        ps[4].innerHTML = `${element.fxi}`
        ps[5].innerHTML = `${element.fxu}`
        ps[6].innerHTML = `${element.fxr}`
        ps[7].innerHTML = `${element.sigfxi}`
        ps[8].innerHTML = `${element.sigfxu}`
        ps[9].innerHTML = `${element.sigfxr}`
        ps[10].innerHTML = `${element.cambio}`
        ps[11].innerHTML = `${element.error}`
        ps[12].innerHTML = `${element.resAbs}`
        lastRow.insertAdjacentElement("beforeBegin", div)
    }
}
export default showInfo