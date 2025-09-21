# 🎓 Smart Campus Assistant

A modern, responsive web application designed to enhance the campus experience for students. This app provides quick access to classroom locations, daily timetables, issue reporting, and an intelligent FAQ chatbot. Built with React and Firebase.

![Smart Campus Assistant Screenshot](https://i.imgur.com/rL4dE6a.png) 
*(Note: You can replace this with your own screenshot later!)*

---

## ✨ Features

* **🗺️ Classroom & Lab Search:** A quick, directory-based search to find any classroom or lab on campus.
* **🗓️ Daily Timetable:** View today's class schedule at a glance.
* **🔧 Issue Reporting:** A simple form to report campus issues (e.g., broken fan, projector problems) directly to administration. Data is stored in Firebase Firestore.
* **🤖 AI-Powered FAQ Bot:** (Bonus) An intelligent chatbot powered by the Google Gemini API to answer frequently asked questions about campus rules, office hours, and more.

---

## 🛠️ Tech Stack

* **Frontend:** [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
* **Backend & Database:** [Google Firebase](https://firebase.google.com/) (Firestore for data storage)
* **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting)
* **AI Chatbot:** [Google Gemini API](https://ai.google.dev/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher)
* A Firebase account

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/YourUsername/smart-campus-assistant.git](https://github.com/YourUsername/smart-campus-assistant.git)
    ```
2.  **Navigate into the project directory**
    ```sh
    cd smart-campus-assistant
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Set up your environment variables**
    Create a file named `.env.local` in the root of the project and add your Firebase and Gemini API keys:
    ```
    # Firebase Config
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTHDOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECTID"
    # ... other Firebase keys

    # Gemini API Key
    VITE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
    ```
5.  **Run the development server**
    ```sh
    npm run dev
    ```
    The app will be available at `http://localhost:5173`.

---

## 🏗️ How It Was Built

This project was built as a prototype to demonstrate a fast and efficient way to create helpful campus utilities using modern web technologies. The core focus was on rapid development and deployment using the React and Firebase ecosystems. The optional chatbot integration with the Gemini API showcases how easily modern AI can be incorporated to add significant value.