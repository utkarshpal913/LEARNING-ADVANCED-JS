# Profile Card Generator

## Overview

The **Profile Card Generator** is a simple front-end web application that dynamically creates profile cards based on user input. The project demonstrates how to use **HTML, CSS, and JavaScript DOM manipulation** to capture form data and generate structured UI components in real time.

Users can enter personal details such as a profile image URL, name, age, occupation, and a short description. Upon submission, the application dynamically constructs a styled profile card and displays it on the page without reloading.

This project focuses on practicing **JavaScript event handling, DOM creation, and dynamic content rendering**.

---

## Features

* Dynamic **profile card generation** from form inputs
* Real-time UI updates without page refresh
* **Circular profile image display** using CSS styling
* Clean and minimal **dark mode interface**
* Structured profile information layout
* Lightweight and beginner-friendly implementation

---

## Technologies Used

* **HTML5** – Page structure and form elements
* **CSS3** – Styling, layout, and dark mode interface
* **JavaScript (Vanilla JS)** – DOM manipulation and event handling

---

## How It Works

1. The user fills in the required fields in the form:

   * Profile Image URL
   * Name
   * Age
   * Occupation
   * Brief Description

2. When the form is submitted:

   * JavaScript captures the submit event.
   * The default page reload behavior is prevented.

3. The application dynamically:

   * Creates new DOM elements for the profile card.
   * Inserts user-provided data into those elements.
   * Appends the generated profile card to the main container.

4. The profile card is displayed instantly on the page.

---

## Learning Objectives

This project was created to practice and demonstrate the following concepts:

* JavaScript **DOM Manipulation**
* Handling **form submission events**
* Dynamically creating HTML elements using `createElement()`
* Appending elements to the DOM using `appendChild()`
* Basic **UI styling and layout with CSS**

---

## Project Structure

```
project-folder
│
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
└── script.js       # JavaScript logic for profile generation
```

---

## Future Improvements

Possible enhancements for this project include:

* Adding a **Dark/Light Mode toggle**
* Implementing **form validation**
* Allowing users to **delete or edit profile cards**
* Improving UI design with **animations and responsive layout**
* Adding **local storage support** to save profiles

---

## Conclusion

The Profile Card Generator is a simple yet practical project that demonstrates the fundamentals of **JavaScript-driven dynamic interfaces**. It highlights how user input can be captured and transformed into interactive UI components using core web technologies.
