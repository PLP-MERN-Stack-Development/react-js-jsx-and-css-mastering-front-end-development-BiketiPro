# SDG Task Manager

A **responsive React application** to help users manage tasks while tracking progress toward Sustainable Development Goals (SDGs). Built using **React**, **Vite**, and **Tailwind CSS**, this project demonstrates component architecture, state management, hooks usage, and API integration.

---

## 🌟 Features

- Add, edit, and delete tasks
- Mark tasks as **active**, **completed**, or **planned for the future**
- Filter tasks by status: All, Active, Completed
- Light/Dark theme toggle
- Responsive design (mobile, tablet, desktop)
- Support and Settings pages
- API integration for external data display (example placeholder)
- Persistent tasks using local storage

---

## 📂 Project Structure

src/
├── components/ # Reusable UI components (Navbar, Footer, Card)
├── pages/ # Page components (Home, TaskManager, Support, Settings)
├── context/ # React context providers (ThemeContext)
├── hooks/ # Custom React hooks (useLocalStorage)
├── api/ # API integration functions
├── utils/ # Utility functions
├── App.jsx # Main application component
└── main.jsx # App entry point

yaml
Copy code

---

## 🛠️ Installation & Setup

1. **Clone your repository** (your GitHub Classroom repo):

```bash
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open in browser:
Go to http://localhost:5173

⚡ Deployment
The project is deployed on Vercel. Access it at:
(https://react-js-sdg-manager.vercel.app/)

🖼️ Screenshots
Home Page

Task Manager Page

Settings Page

(Add more screenshots as needed)

📖 How to Use
Navigate to Tasks to add a new task.

Mark tasks as active, completed, or planned using the status buttons.

Filter tasks using the All / Active / Completed buttons.

Go to Settings to toggle light/dark theme or reset all tasks.

Use Support for help or guidance.

🛠️ Technologies Used
React

Vite

Tailwind CSS

JavaScript (ES6+)

Local Storage

React Router DOM

👨‍💻 Author
Teddy Biketi

📄 License
This project is for educational purposes as part of the MERN Stack Development Full-Stack Training.

yaml
Copy code
