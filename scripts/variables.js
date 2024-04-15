class Variables {
    constructor() {
        if (!Variables.instance) {
            this.infoAPP = document.querySelector("#infoModal")
            this.infoButt = document.querySelector("#infoButt")
            Variables.instance = this;
            this.userEqInput = document.querySelector("#userEq")
            this.userEq = "";
            this.calcButton = document.querySelector("#calcul")
            this.errInfo = "";
        }
        return Variables.instance
    }

    setUserEq(value) {
        this.userEq = value;
    }

    setNewErrorInfo(info) {
        this.errInfo = info;
    }

}
export default Variables