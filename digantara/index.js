import { disableBtn, enableBtn, generateSummary, getNearestElement, showPage, updateProgress, validateInput } from "./utils/helper.js";

const formObj = new Map();

let pages = [];
let currentPage = 0;

const updateProgressBar = updateProgress(".progress-bar");

function validateForm(currPage) {
    let isALLValid = [];
    const pages = document.querySelectorAll(".pages");
    const inputElements = pages[currPage].querySelectorAll(".user-input");

    for (let input of inputElements) {
        const spanElement = getNearestElement(input, ".info");

        const isValid = validateInput(input, spanElement || null);
        isALLValid.push(isValid);

        if (spanElement && !isValid) {
            spanElement.style.color = "red";
            spanElement.style.visibility = "visible";
        }
        if (isValid) spanElement.style.visibility = "hidden";

        if (!isValid) {
            setTimeout(() => {
                spanElement.style.visibility = "hidden";
                console.log(spanElement);
            }, 5000);
        }

        isALLValid.push(true);
    }

    return isALLValid.every(val => val);
}



function handleInputChange(event) {
    const { name, value } = event.target;
    formObj.set(name, value || "");

    let values = [...formObj.values()];
    const totalFields = values.length;
    const singleProgressPercentage = Math.abs(100 / totalFields);

    const filledFields = (values.filter(val => val.trim() !== "")).length;

    updateProgressBar(singleProgressPercentage * filledFields);
}

function handleAttachEventListener(element) {
    element.addEventListener("input", handleInputChange);
}

let showCurrentPage = null;

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const editBtn = document.getElementById("edit");

editBtn.addEventListener("click", () => {
    event.preventDefault();
    nextBtn.value = "Next";
    disableBtn(backBtn);
    currentPage = 0;
    showCurrentPage(currentPage);
});

nextBtn.addEventListener("click", () => {
    if (!validateForm(currentPage)) {
        return;
    }
    if (currentPage + 1 == pages.length - 1) {
        nextBtn.value = "Submit";
        generateSummary("summary", formObj);
    }
    if (currentPage + 1 < pages.length) {
        showCurrentPage(++currentPage);
        enableBtn(backBtn);
    }
});

backBtn.addEventListener("click", () => {
    nextBtn.value = "Next";
    if (currentPage - 1 > 0) {
        showCurrentPage(--currentPage);
    } else if (currentPage - 1 === 0) {
        showCurrentPage(--currentPage);
        disableBtn(backBtn);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementsByClassName("user-input");
    for (let i = 0; i < inputField.length; i++) {
        handleAttachEventListener(inputField[i]);
        formObj.set(inputField[i].name, "");
    }
    inputField[0].focus();

    const pagesSection = document.querySelectorAll(".pages");
    pagesSection.forEach((section, index) => {
        pages.push(index);
        section.style.display = "none";
    });

    pagesSection[0].style.display = "block";

    showCurrentPage = showPage("pages");
    showCurrentPage(currentPage);
    disableBtn(backBtn);
});