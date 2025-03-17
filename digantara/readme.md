# Dynamic Multi-Step Form

## Check deployed project live [Link](https://dynamic-multi-step-form.netlify.app/)

This project implements a dynamic, three-step multi-step form using vanilla JavaScript, HTML, and CSS.

## Installation

Clone the repository:

```
git clone https://github.com/mdmusharruf13/dynamic-multi-step-form.git
```

open **index.html** file file using any browser.

other way is, if you have **live server** extension installed on live server and open browser type:

```
http://localhost:3000/
```

port number may varies.

## Project Structure

- `index.html`: Contains the HTML structure for the form.
- `styles.css`: Contains the CSS styles for the form.
- `index.js`: Contains the main JavaScript logic for the form.
- `utils/helper.js`: Contains reusable helper functions.

## Features Implemented

- **Form Structure:**
  - Three distinct steps: basic details, contact information, and summary.
  - Clear separation of concerns using `<section>` elements.
- **Validation:**
  - Input validation for required fields, email format, phone number length, and date format.
  - Dynamic error message display using `<span>` elements.
- **Dynamic Navigation:**
  - "Next" and "Back" buttons for navigation between steps.
  - Ability to edit data by navigating back.
- **State Management:**
  - Form data managed using a `Map` object (`formObj`).
- **Responsiveness:**
  - Responsive design using CSS Flexbox and media queries.
- **Progress Indicator:**
  - Dynamic progress bar to indicate form completion.
- **Summary View:**
  - Displays a summary of entered data in a table format.
  - "Edit" button to return to the first step.

## Design Decisions and Code Analysis

1.  **HTML Structure:**
    - Organized using `<section>` elements for each form step, improving readability and maintainability.
    - Input fields are grouped logically within `<section class="form-input">`.
    - A progress bar container is added, for tracking user progress.
2.  **CSS Styling:**
    - Clean and consistent styling using CSS.
    - Flexbox for responsive layout.
    - Media queries for adapting to different screen sizes.
3.  **JavaScript Logic:**
    - **Modularization:** Reusable functions in `utils/helper.js` (e.g., `showPage`, `disableBtn`, `validateInput`, `generateSummary`, `updateProgress`).
    - **State Management:** `Map` object (`formObj`) for managing form data.
    - **Dynamic Navigation:** Event listeners for "Next" and "Back" buttons to control step transitions.
    - **Validation:** `validateInput` function for basic input validation.
    - **Summary View:** `generateSummary` function for dynamic summary generation.
    - **Progress Bar:** `updateProgress` function for dynamic progress bar updates.
    - **DOM Manipulation:** `showPage` function for controlling page visibility.
4.  **Helper Functions:**
    - `showPage`: Manages page visibility similar to pagination.
    - `disableBtn` and `enableBtn`: Manages button states.
    - `generateSummary`: Creates the summary table.
    - `validateInput`: Validates input fields.
    - `getNearestElement`: Finds the nearest element.
    - `updateProgress`: Updates the progress bar.

## Scalability and Usability Enhancements

For a production-grade application, the following enhancements would be beneficial:

1.  **TypeScript Integration:**
    - Transitioning to TypeScript would improve code maintainability and prevent runtime errors by defining data models and interfaces.
2.  **Advanced Validation:**
    - Implementing a validation library (e.g., Formik, Yup) would streamline validation and provide more advanced features.
    - Custom validation rules could be implemented for complex scenarios.
3.  **Error Handling:**
    - Enhance error handling by displaying error messages directly near input fields.
    - Implement global error handling.
4.  **Accessibility:**
    - Implement ARIA attributes for better accessibility.
    - Ensure proper keyboard navigation.
    - Use semantic HTML.
5.  **State Management:**
    - For larger applications, consider using a state management library (e.g., Context API, Redux) for better data flow.
6.  **Animations and Transitions:**
    - Add smooth transitions and animations for a better user experience.
7.  **Backend Integration:**
    - Implement API integration to submit the form data to a backend server.
8.  **LocalStorage Persistence:**
    - Add functionality to save the current form state inside of local storage, so that a user can come back to the form and it will be in the state that they left it.
9.  **Refactoring of progress bar**
    - The progress bar currently updates based on the amount of fields that are filled. This is not the most accurate method. It would be better to have the progress bar update based on what step the user is on.

## Conclusion

This project successfully implements a dynamic multi-step form with basic validation and navigation. By incorporating the suggested enhancements, the form can be scaled and improved for production use, ensuring better maintainability, usability, and robustness.
