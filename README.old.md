# 📦 Software Bundle Installer

A web-based platform that allows users to select multiple software applications from categorized lists and download a custom installer script. Inspired by Ninite, with support for Windows, macOS, and Linux.

## 🎯 Features

- **Multi-Platform Support**: Generate install scripts for Windows, macOS, and Linux
- **Categorized Software Lists**: Browse software by category (Browsers, IDEs, Utilities, etc.)
- **Search & Filter**: Easily find software by name or category
- **One-Click Bundle**: Select multiple applications and generate a single install script
- **Modern UI**: Built with React and Tailwind CSS
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📁 Project Structure

```
software-installer/
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── OSSelector.jsx
│   │   ├── SoftwareList.jsx
│   │   ├── SoftwareCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── SelectedBundle.jsx
│   ├── data/            # Software database
│   │   └── software.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **JavaScript/JSX** - Core language

## 📋 Software Categories

- **Browsers**: Chrome, Firefox, Brave
- **IDEs**: VS Code, PyCharm, IntelliJ IDEA
- **Data Science**: Anaconda, Jupyter
- **Utilities**: 7-Zip, Notepad++, Git
- **Communication**: Discord, Slack, Zoom
- **Media**: VLC, Spotify
- **Development**: Node.js, Python, Docker

## 🎨 Usage

1. Select your operating system (Windows/macOS/Linux)
2. Browse or search for software you want to install
3. Check the boxes for desired applications
4. Review your selection in the bundle panel
5. Click "Download Install Script"
6. Run the script on your machine

## ⚠️ Notes

- **Windows**: Uses winget (Windows Package Manager). Requires Windows 10+ with winget installed.
- **macOS**: Uses Homebrew. Ensure Homebrew is installed.
- **Linux**: Uses apt-get for Debian/Ubuntu-based systems.

### Making Scripts Executable (macOS/Linux)

After downloading the script, make it executable:

```bash
chmod +x install-bundle.sh
```

Then run it:

```bash
./install-bundle.sh
```

## 🔮 Future Enhancements

- User accounts and saved bundles
- Share bundles via link/QR code
- Admin panel for managing software database
- API access for developers
- More software options
- Custom installer package (EXE/DMG/DEB)
- Cloud backup of bundles

## 📝 License

MIT License - Feel free to use and modify as needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for developers who love automation

