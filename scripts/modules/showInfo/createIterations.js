const createIterations = (select, rowsQuant) => {
    let concat = /*html*/`<option value="0">Iteracion</option>`
    for (let i = 0; i < rowsQuant; i++) {
        const option = /*html*/`<option value="${i + 1}">${i + 1}</option>`
        concat += option
    }
    select.innerHTML = concat;
}
export default createIterations