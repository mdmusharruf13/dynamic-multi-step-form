export function showPage(className) {

    const list = document.getElementsByClassName(className);

    const elements = Array.from(list);

    return (currentPage) => {
        for (let element of elements) {
            element.style.display = "none";
        }
        elements[currentPage].style.display = "block";
    }
}

export function disableBtn(btn) {
    if (btn) {
        btn.setAttribute("disabled", true);
    }
}

export function enableBtn(btn) {
    if (btn) {
        btn.removeAttribute("disabled");
    }
}

export function generateSummary(elementId, formObj) {
    const summary = document.getElementById(elementId);
    summary.innerHTML = "";

    const heading = document.createElement('h2');
    heading.innerText = "Details Summary"

    const newSection = document.createElement('section');
    const list = document.createElement('ul');

    for (let [key, value] of formObj) {
        const item = document.createElement('li');
        item.innerHTML = `<b>${key}</b>` + ": " + value;
        list.append(item);
    }

    newSection.append(list);
    summary.append(heading);
    summary.append(newSection);
}

export function validateInput(input, infoElement) {
    let isValid = true;
    const { type, value, name } = input;
    console.log(type, value, name, value.length);

    if (type === 'text' && value.length < 3) {
        if (infoElement) infoElement.innerText = "Name must have atleast three characters";
        isValid = false;
    }
    else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        if (infoElement) infoElement.innerText = "Enter valid email please";
        isValid = false;
    }
    else if (type === "number" && (value.length < 10 || value.length > 12)) {
        if (infoElement) infoElement.innerText = "Phone must between 10 - 12 numbers";
        isValid = false;
    }
    else if (type === "date" && value.length !== 10) {
        if (infoElement) infoElement.innerText = "Select full Date";
        isValid = false;
    }
    else if (type === "radio") {
        const radioGroup = document.getElementsByName(name);
        console.log(radioGroup);
        if (![...radioGroup].some(radio => radio.checked)) {
            if (infoElement) infoElement.innerText = "Please select your gender";
            isValid = false;
        }
    }

    return isValid;
}