# 🚀 Word Counter (Iron Man / JARVIS Style)

A simple **JavaScript word counter project** with a futuristic **Iron Man / JARVIS inspired UI**.
The application counts the number of characters typed in the input field and updates the count **in real time**.

---

## ✨ Features

* ⚡ Real-time character counting using JavaScript
* 🟥 Futuristic **Iron Man / JARVIS themed UI**
* 🌙 Dark mode interface
* 🎯 Clean and minimal design
* 📚 Beginner-friendly JavaScript logic

---

## ⚙️ How It Works

When a user types inside the input field, a JavaScript **`input` event listener** detects the change.

The program:

1. Reads the current text inside the input box
2. Calculates the **length of the text**
3. Updates the counter **instantly on the screen**

---

## 🛠 Technologies Used

* 🌐 **HTML5** – Structure of the application
* 🎨 **CSS3** – Styling and futuristic UI design
* 🧠 **JavaScript (Vanilla JS)** – Real-time character counting logic

---

## 📂 Project Structure

```
project-folder
│
├── index.html
├── style.css
└── script.js
```

---

## 💻 JavaScript Logic

The JavaScript file listens for input events and updates the counter dynamically.

```javascript
let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input", function(vals){
    span.textContent = vals.target.value.length;
});
```

---

## 🎓 Learning Purpose

This project was created while learning **JavaScript DOM manipulation and event handling**.

It demonstrates how to:

* 🧩 Use the **input event**
* 🔎 Access and update **DOM elements**
* 🔢 Create a **live counter**
* 🎨 Build a small interactive UI

---

## 🔮 Future Improvements

* 📝 Add **word counting instead of only characters**
* 🚫 Add **maximum character limit**
* ⚠️ Show **warning when limit is reached**
* ✨ Add **animations and futuristic effects**

---

## 👨‍💻 Author

Created as part of a **JavaScript learning journey**.
