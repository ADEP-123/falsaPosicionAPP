class Variables {
    constructor() {
        if (!Variables.instance) {
            this.infoAPP = document.querySelector("#infoModal")
            this.infoButt = document.querySelector("#infoButt")
            this.userEqInput = document.querySelector("#userEq")
            this.userEq = "";
            this.calcButton = document.querySelector("#calcul")
            this.errInfo = [];
            this.errDiv = document.querySelector("#errDiv");
            this.transEqInput = document.querySelector("#transEq")
            this.calcBoardButton = document.querySelector("#boardCalcButton")
            this.calcBoard = document.querySelector("#boardCalc");
            this.limSup = document.querySelector("#limSup");
            this.limInf = document.querySelector("#limInf");
            this.cantDec = document.querySelector("#cantDec");
            this.cantIter = document.querySelector("#cantIter");
            this.errMin = document.querySelector("#errMin");
            this.rows = [];
            this.tableInfoDiv = document.querySelector(".tableInfoDiv")
            this.rowsQuant = 0;
            this.actualIndexIt = 0;
            this.nextPackIt = document.querySelector("#nextPackIt");
            this.befPackIt = document.querySelector("#befPackIt");
            this.showedIter = document.querySelector("#showedIter");
            this.iteSelect = document.querySelector("#iteSelect");
            this.showIteInfoButt = document.querySelector("#showIteInfo");
            Variables.instance = this;
        }
        return Variables.instance
    }

    setUserEq(value) {
        this.userEq = value;
    }

    setNewErrorInfo(info) {
        this.errInfo.push(info);
    }

    clearErrorInfo() {
        this.errInfo = []
    }

    setRows(rows) {
        this.rows = rows;
        this.rowsQuant = rows.length
    }

    nexPack() {
        this.actualIndexIt += 10
    }

    befPack() {
        this.actualIndexIt -= 10
    }

    restPack() {
        this.actualIndexIt = 0
    }

}
export default Variables