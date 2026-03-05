# Custom File Upload Button

A simple JavaScript project that demonstrates how to create a **custom file upload interface** instead of using the default browser file input. The application allows users to click a styled button to open the file picker and dynamically displays the selected file name on the button.

## Overview

Modern web applications often replace the default file input with a custom-designed interface to improve user experience. This project implements that concept by triggering a hidden file input through a custom button and updating the UI when a file is selected.

## Features

* Custom styled upload button
* Opens system file picker using JavaScript
* Displays the selected file name dynamically
* Simple and clean user interface
* Lightweight implementation using vanilla JavaScript

## Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling and layout
* **JavaScript (DOM Manipulation)** – Event handling and UI updates

## How It Works

1. A file input element is placed in the HTML but can be visually hidden using CSS.
2. A custom button is displayed to the user.
3. When the button is clicked, JavaScript programmatically triggers the hidden file input using `.click()`.
4. Once a file is selected, the `change` event fires.
5. JavaScript retrieves the selected file from the `files` object and updates the button text with the file name.

## Project Structure

```
project-folder
│
├── index.html
├── style.css
└── script.js
```

## Learning Objectives

This project helps reinforce the following front-end development concepts:

* DOM element selection
* Event listeners in JavaScript
* Handling file input in web applications
* Updating UI dynamically based on user interaction

## Possible Improvements

Future enhancements could include:

* Displaying the file size
* Adding image preview before upload
* Implementing drag-and-drop file upload
* Adding upload progress indicators

## Author

Developed as a practice project to strengthen understanding of JavaScript DOM manipulation and event-driven programming.
