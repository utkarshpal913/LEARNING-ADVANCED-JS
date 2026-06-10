# 🔐 Email & Password Validator

A simple **Login Form Validator** built using **HTML, CSS, and JavaScript**.  
This project validates user input for **email** and **password** using **regular expressions (Regex)** before allowing submission.

---

## 📌 Features

- Email validation using **Regex**
- Strong password validation
- Error messages for invalid input
- Success message when all details are correct
- Clean and responsive UI
- Prevents form submission when inputs are invalid

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (DOM Manipulation)
- Regular Expressions (Regex)

---

## 📂 Project Structure

```
project-folder
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

1. User enters **Email** and **Password**.
2. When the **Submit** button is clicked:
   - JavaScript prevents default form submission.
   - Email is checked using a **Regex pattern**.
   - Password is checked using a **strong password Regex**.
3. If inputs are invalid:
   - Error messages appear below the fields.
4. If both inputs are valid:
   - A success message **"All details are correct"** appears.

---

## 📧 Email Validation Rules

The email must follow this format:

```
username@domain.com
```

Examples:

Valid:
```
a@a.in
user123@gmail.com
john.doe@mail.com
```

Invalid:
```
user@
@gmail.com
user@.com
```

---

## 🔑 Password Validation Rules

Password must contain:

- Minimum **8 characters**
- At least **1 uppercase letter**
- At least **1 lowercase letter**
- At least **1 number**
- At least **1 special character**

Example of a valid password:

```
Hello@123
```

---

## 🚀 How to Run the Project

1. Download or clone the repository

```
git clone https://github.com/your-username/email-password-validator.git
```

2. Open the project folder

3. Run `index.html` in your browser

---

## 📸 Preview

Simple login form with validation messages.

---

## 🎯 Learning Purpose

This project helps practice:

- JavaScript **DOM manipulation**
- **Form validation**
- **Regular Expressions**
- **Event handling**
- Basic **frontend UI design**

---

## 👨‍💻 Author

Made for JavaScript practice.