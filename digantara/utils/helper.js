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
    const summaryElement = document.getElementById(elementId);
    summaryElement.innerHTML = "";

    const tableElement = document.createElement("table");
    tableElement.setAttribute("align", "left");

    for (let [key, value] of formObj) {
        const tableRow = document.createElement("tr");
        const rowHeading = document.createElement("th")
        const rowData = document.createElement("td");

        rowHeading.innerText = key;
        rowData.innerText = value;

        tableRow.append(rowHeading);
        tableRow.append(rowData);

        tableElement.append(tableRow);
    }

    summaryElement.append(tableElement);
}

export function validateInput(input, infoElement) {
    let isValid = true;
    const { type, value, name } = input;

    if (type === 'text' && value.length < 3) {
        if (infoElement) infoElement.innerText = "must have atleast three characters";
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
        if (![...radioGroup].some(radio => radio.checked)) {
            if (infoElement) infoElement.innerText = "Please select your gender";
            isValid = false;
        }
    }

    return isValid;
}

export function getNearestElement(element, value) {
    let currentElement = null;

    if (element) {
        const tempElement = element.querySelector(value);
        // console.log("count", element, tempElement);

        if (!tempElement) {
            currentElement = getNearestElement(element.parentElement, value);
        } else currentElement = tempElement;
    }

    return currentElement;
}