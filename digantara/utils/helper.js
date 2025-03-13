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