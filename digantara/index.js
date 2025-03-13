import { disableBtn, enableBtn, generateSummary, showPage } from "./utils/helper.js";

const formObj = new Map();

let pages = [];
let currentPage = 0;


function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    formObj.set(name, value);
    console.log(formObj);
}

function handleAttachEventListener(element) {
    element.addEventListener("input", handleInputChange);
}

let showCurrentPage = null;

const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");


nextBtn.addEventListener("click", () => {
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
    }

    const pagesSection = document.querySelectorAll(".pages");
    pagesSection.forEach((ele, index) => pages.push(index));

    const formTwo = document.getElementById("form-two");
    const summary = document.getElementById("summary");

    formTwo.style.display = "none";
    summary.style.display = "none";

    showCurrentPage = showPage("pages");
    showCurrentPage(currentPage);
    disableBtn(backBtn);
});