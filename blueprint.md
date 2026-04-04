# Blueprint: Lotto Number Generator

## Overview

This is a simple, visually appealing web application that generates random lottery numbers for the user. It features a clean, modern design with interactive elements and animations.

## Project Outline

### Version 1.0 (Initial)

*   **HTML (`index.html`):** Basic structure with a container, a title, a placeholder for the numbers, and a "Generate" button.
*   **CSS (`style.css`):** Modern design with a custom font (Poppins), a clean color palette, and responsive layout.
*   **JavaScript (`main.js`):** Logic to generate and display 6 unique random numbers between 1 and 45.

### Version 1.1 (Visual Flair)

*   **HTML (`index.html`):** Added a lucky clover icon (🍀).
*   **CSS (`style.css`):** Added animations for the icon and numbers.

### Version 1.2 (Color Theme Update)

*   **CSS (`style.css`):** Changed the primary color to "lucky green".

### Version 1.3 (Google Sign-In)

*   **Goal:** Integrated Firebase Authentication for Google Sign-In.
*   **Status:** This feature is being temporarily removed to focus on the core lottery generation functionality as per the new request.

## Current Plan: Simplify and Localize to Korean

*   **Goal:** Create a simple Lotto Number Generator, removing the Google Sign-In feature and localizing the content to Korean.

*   **Steps:**
    1.  **Modify `index.html`:**
        *   Remove all authentication-related elements (buttons, containers, Firebase scripts).
        *   Translate the title and button text to Korean.
    2.  **Modify `style.css`:**
        *   Remove all CSS styles related to the authentication elements.
    3.  **Modify `main.js`:**
        *   Remove all Firebase and authentication-related JavaScript code.
    4.  **Delete `.idx/mcp.json`:**
        *   Remove the Firebase server configuration file as it is no longer needed.
