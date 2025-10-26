export const softwareData = [
  {
    id: 'chrome',
    name: 'Google Chrome',
    category: 'Browsers',
    description: 'Fast, secure web browser',
    icon: '🌐',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Google.Chrome --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask google-chrome',
      linux: 'sudo apt-get install -y google-chrome-stable'
    }
  },
  {
    id: 'firefox',
    name: 'Mozilla Firefox',
    category: 'Browsers',
    description: 'Privacy-focused browser',
    icon: '🦊',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Mozilla.Firefox --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask firefox',
      linux: 'sudo apt-get install -y firefox'
    }
  },
  {
    id: 'brave',
    name: 'Brave Browser',
    category: 'Browsers',
    description: 'Privacy-first browser with ad blocker',
    icon: '🛡️',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Brave.Brave --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask brave-browser',
      linux: 'sudo apt-get install -y brave-browser'
    }
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'IDEs',
    description: 'Lightweight code editor',
    icon: '💻',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Microsoft.VisualStudioCode --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask visual-studio-code',
      linux: 'sudo snap install --classic code'
    }
  },
  {
    id: 'pycharm',
    name: 'PyCharm Community',
    category: 'IDEs',
    description: 'Python IDE by JetBrains',
    icon: '🐍',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id JetBrains.PyCharm.Community --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask pycharm-ce',
      linux: 'sudo snap install pycharm-community --classic'
    }
  },
  {
    id: 'intellij',
    name: 'IntelliJ IDEA Community',
    category: 'IDEs',
    description: 'Java IDE by JetBrains',
    icon: '☕',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id JetBrains.IntelliJIDEA.Community --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask intellij-idea-ce',
      linux: 'sudo snap install intellij-idea-community --classic'
    }
  },
  {
    id: 'anaconda',
    name: 'Anaconda',
    category: 'Data Science',
    description: 'Python distribution for data science',
    icon: '📊',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Anaconda.Anaconda3 --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask anaconda',
      linux: 'curl -O https://repo.anaconda.com/archive/Anaconda3-latest-Linux-x86_64.sh && bash Anaconda3-latest-Linux-x86_64.sh -b'
    }
  },
  {
    id: 'jupyter',
    name: 'Jupyter Notebook',
    category: 'Data Science',
    description: 'Interactive computing environment',
    icon: '📓',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'pip install jupyter',
      macos: 'pip3 install jupyter',
      linux: 'pip3 install jupyter'
    }
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Utilities',
    description: 'Version control system',
    icon: '🔧',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Git.Git --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install git',
      linux: 'sudo apt-get install -y git'
    }
  },
  {
    id: '7zip',
    name: '7-Zip',
    category: 'Utilities',
    description: 'File archiver',
    icon: '📦',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id 7zip.7zip --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask p7zip',
      linux: 'sudo apt-get install -y p7zip-full'
    }
  },
  {
    id: 'notepad++',
    name: 'Notepad++',
    category: 'Utilities',
    description: 'Enhanced text editor',
    icon: '📝',
    platforms: ['windows'],
    install: {
      windows: 'winget install --id Notepad++.Notepad++ --silent --accept-package-agreements --accept-source-agreements'
    }
  },
  {
    id: 'discord',
    name: 'Discord',
    category: 'Communication',
    description: 'Voice and text chat',
    icon: '💬',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Discord.Discord --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask discord',
      linux: 'sudo apt-get install -y discord'
    }
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communication',
    description: 'Team collaboration platform',
    icon: '💼',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id SlackTechnologies.Slack --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask slack',
      linux: 'sudo snap install slack --classic'
    }
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'Communication',
    description: 'Video conferencing',
    icon: '📹',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Zoom.Zoom --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask zoom',
      linux: 'wget https://zoom.us/client/latest/zoom_amd64.deb && sudo apt install -y ./zoom_amd64.deb'
    }
  },
  {
    id: 'vlc',
    name: 'VLC Media Player',
    category: 'Media',
    description: 'Universal media player',
    icon: '🎬',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id VideoLAN.VLC --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask vlc',
      linux: 'sudo apt-get install -y vlc'
    }
  },
  {
    id: 'spotify',
    name: 'Spotify',
    category: 'Media',
    description: 'Music streaming',
    icon: '🎵',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Spotify.Spotify --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask spotify',
      linux: 'snap install spotify'
    }
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Development',
    description: 'JavaScript runtime',
    icon: '🟢',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install node',
      linux: 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt-get install -y nodejs'
    }
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Development',
    description: 'Programming language',
    icon: '🐍',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Python.Python.3.11 --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install python@3.11',
      linux: 'sudo apt-get install -y python3 python3-pip'
    }
  },
  {
    id: 'docker',
    name: 'Docker Desktop',
    category: 'Development',
    description: 'Containerization platform',
    icon: '🐳',
    platforms: ['windows', 'macos', 'linux'],
    install: {
      windows: 'winget install --id Docker.DockerDesktop --silent --accept-package-agreements --accept-source-agreements',
      macos: 'brew install --cask docker',
      linux: 'sudo apt-get install -y docker.io && sudo systemctl start docker && sudo systemctl enable docker'
    }
  }
];

export const categories = [
  'All',
  'Browsers',
  'IDEs',
  'Data Science',
  'Utilities',
  'Communication',
  'Media',
  'Development'
];

export const platforms = ['windows', 'macos', 'linux'];

