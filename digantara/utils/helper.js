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