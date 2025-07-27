# 🎬 Cinema Center - Netflix Clone

A modern, responsive Netflix clone built with React and Vite, featuring a sleek movie streaming interface with Firebase authentication.

![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-red?style=for-the-badge&logo=netflix)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-12.0.0-yellow?style=for-the-badge&logo=firebase)

## ✨ Features

- 🔐 **User Authentication** - Firebase Auth integration with login/signup
- 🎥 **Movie Streaming Interface** - Browse and watch movie trailers
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔍 **Search Functionality** - Find your favorite movies quickly
- 🎯 **Movie Categories** - Organized content by genres and popularity
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Netflix-like UI** - Authentic Netflix user interface design

## 🚀 Live Demo

🔗 **[View Live Demo](https://your-demo-link.com)** _(Deploy and add your link here)_

## 📸 Screenshots

### Home Page

![Home Page Screenshot](src/assets/hero_banner.jpg)

### Movie Player

_Add screenshot of your player page_

### Mobile View

_Add mobile responsive screenshot_

## 🛠️ Tech Stack

- **Frontend:** React 19.1.0, React Router DOM
- **Build Tool:** Vite 7.0.4
- **Authentication:** Firebase 12.0.0
- **Styling:** CSS3, Responsive Design
- **Icons & Assets:** Custom Netflix-style icons
- **Notifications:** React Toastify
- **Linting:** ESLint with React plugins

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account for authentication setup

## 🏃‍♂️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tiwariiiabhisekh/cinema-center-netflix-clone.git
cd cinema-center-netflix-clone
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and choose sign-in methods
3. Copy your Firebase config
4. Update `src/firebase.js` with your configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  // ... other config
};
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📁 Project Structure

```
cinema-center-netflix-clone/
├── public/
│   ├── background_banner.jpg
│   └── netflix_favicon.ico
├── src/
│   ├── Components/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   ├── Search/
│   │   └── TitleCards/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Login/
│   │   └── Player/
│   ├── assets/
│   │   ├── cards/
│   │   └── icons/
│   ├── App.jsx
│   ├── firebase.js
│   └── main.jsx
├── package.json
└── README.md
```

## 📱 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Deploy to Netlify

#### Method 1: Connect GitHub Repository (Recommended)
1. **Go to [Netlify](https://netlify.com)** and sign up/login
2. **Click "Add new site"** → "Import an existing project"
3. **Connect your GitHub** and select `cinema-center-netflix-clone`
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Click "Deploy site"**

#### Method 2: Manual Deploy
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify deploy area
```

**Important:** The `_redirects` and `netlify.toml` files are already configured to handle React Router properly.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhishek Tiwari**

- GitHub: [@tiwariiiabhisekh](https://github.com/tiwariiiabhisekh)
- LinkedIn: [Add your LinkedIn profile]
- Portfolio: [Add your portfolio website]

## 🙏 Acknowledgments

- Netflix for design inspiration
- React team for the amazing framework
- Vite team for the blazing fast build tool
- Firebase team for authentication services

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/tiwariiiabhisekh/cinema-center-netflix-clone)
![GitHub language count](https://img.shields.io/github/languages/count/tiwariiiabhisekh/cinema-center-netflix-clone)
![GitHub top language](https://img.shields.io/github/languages/top/tiwariiiabhisekh/cinema-center-netflix-clone)

---

⭐ Star this repository if you found it helpful!
