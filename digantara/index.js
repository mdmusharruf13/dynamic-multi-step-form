export const formObj = {
    userName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: ''
}

function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    formObj[name] = value;
    console.log(formObj);
}

function handleAttachEventListener(element) {
    element.addEventListener("input", handleInputChange);
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementsByClassName("user-input");
    for (let i = 0; i < inputField.length; i++) {
        handleAttachEventListener(inputField[i]);
    }
});