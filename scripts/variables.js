class Variables {
    constructor() {
        if (!Variables.instance) {
            this.infoAPP = document.querySelector("#infoModal")
            this.infoButt = document.querySelector("#infoButt")
            Variables.instance = this;
        }
        return Variables.instance
    }

}
export default Variables