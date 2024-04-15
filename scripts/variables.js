class Variables {
    constructor() {
        if (!Variables.instance) {
            this.infoAPP = document.querySelector("#infoModal")
            this.infoButt = document.querySelector("#infoButt")
            Variables.instance = this;
            this.userEqInput = document.querySelector("#userEq")
            this.userEq = "";
            this.calcButton = document.querySelector("#calcul")
            this.errInfo = [];
            this.errDiv = document.querySelector("#errDiv");
            this.transEqInput = document.querySelector("#transEq")
            this.calcBoardButton = document.querySelector("#boardCalcButton")
            this.calcBoard = document.querySelector("#boardCalc");
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