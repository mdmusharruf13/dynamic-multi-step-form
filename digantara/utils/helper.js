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