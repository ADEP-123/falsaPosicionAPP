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

    clearErrorInfo(){
        this.errInfo = []
    }

}
export default Variables