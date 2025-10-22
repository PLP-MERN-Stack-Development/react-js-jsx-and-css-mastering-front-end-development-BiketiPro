# 🌍 SDG Task Manager

A responsive and interactive **React application** built using **Vite** and **Tailwind CSS**.  
This project demonstrates modern **frontend development** concepts — including component architecture, hooks, API integration, state management, and responsive UI design.

---

## 🎯 **Objective**

This application was created as part of the **React JSX & Tailwind CSS Assignment**, showcasing:
- Component-based architecture
- State and context management
- Custom hooks
- API data fetching
- Responsive layouts with Tailwind CSS

---

## 🧩 **Features**

✅ **Reusable Components**
- Button, Card, Navbar, and Footer with props-based customization

✅ **Task Manager**
- Add, mark complete, delete, and filter tasks (All, Active, Completed)
- Tasks persist via local storage

✅ **State Management**
- `useState`, `useEffect`, and custom hook `useLocalStorage`

✅ **Theme Management**
- Light/Dark mode toggle using React Context + Tailwind dark mode

✅ **API Integration**
- Fetch posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts)
- Includes search and pagination

✅ **Responsive Design**
- Optimized for mobile, tablet, and desktop screens

✅ **Routing**
- Implemented using **React Router v6** for seamless page navigation

---

## 🗂️ **Project Structure**

src/
├── api/ # API integration functions
├── components/ # Reusable UI components
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ └── ThemeToggle.jsx
├── context/ # Context providers (ThemeContext)
├── hooks/ # Custom hooks (useLocalStorage)
├── pages/ # Main pages (Home, Tasks, Dashboard, Support, Settings)
├── utils/ # Helper functions
├── App.jsx # Root component with routes
└── main.jsx # Entry point

yaml
Copy code

---

## ⚙️ **Installation & Setup**

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/<assignment-repo-name>.git
cd <assignment-repo-name>
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run the Development Server
bash
Copy code
npm run dev
The app should now be running on:
👉 http://localhost:5173

🌐 Live Deployment
Deployed using Vercel

🔗 Live URL: https://your-deployment-link.vercel.app

📸 Screenshots
🏠 Home Page

✅ Task Manager

⚙️ Settings Page

🧠 Technologies Used
Technology	Purpose
React (Vite)	Frontend Framework
Tailwind CSS	Styling and responsiveness
React Router DOM	Routing between pages
JSONPlaceholder	Public API for data fetching
Context API	Global state management
Local Storage	Task persistence
Vercel	Deployment

💡 How to Contribute
Feel free to fork this repository and submit a pull request with any improvements.

👤 Author
Teddy Biketi
💼 Full Stack Developer (React | Laravel | Flutter)
📧 [your.email@example.com]
🌐 https://your-portfolio-link.com

🏁 License
This project is open-source and available under the MIT License.