import { disableBtn, enableBtn, generateSummary, showPage, validateInput } from "./utils/helper.js";

const formObj = new Map();

let pages = [];
let currentPage = 0;

function validateForm(currPage) {
    let isALLValid = [];
    const pages = document.querySelectorAll(".pages");
    const inputElements = pages[currPage].querySelectorAll(".user-input");

    for (let input of inputElements) {
        const spanElement = input.parentElement.querySelector(".info");
        spanElement.style.color = "red";

        const isValid = validateInput(input, spanElement);
        isALLValid.push(isValid);

        setTimeout(() => {
            spanElement.innerText = ""
        }, 5000);

        isALLValid.push(true);
    }

    return isALLValid.every(val => val);
}

function handleInputChange(event) {
    const { name, value } = event.target;
    formObj.set(name, value);
}

function handleAttachEventListener(element) {
    element.addEventListener("input", handleInputChange);
}

let showCurrentPage = null;

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");


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