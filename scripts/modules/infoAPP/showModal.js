const showModal = (modal, otherModal) => {
    if (modal.style.right === "-100%" || modal.style.right === "") {
        modal.style.display = "flex"
        setTimeout(() => {
            modal.style.right = "0%"
            otherModal.style.right = "-100%"
        }, 100)
        otherModal.style.display = "none"
    } else {
        modal.style.right = "-100%"
        modal.style.display = "none"
    }
}
export default showModal;