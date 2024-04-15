const showModal = (modal, otherModal) => {
    if (modal.style.right === "-100%" || modal.style.right === "") {
        modal.style.right = "0%"
        otherModal.style.right = "-100%"
    } else {
        modal.style.right = "-100%"
    }
}
export default showModal;