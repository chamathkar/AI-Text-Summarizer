💻 AI Text Summarizer Web App

A sleek, modern, and responsive web app that uses Puter.js AI to generate concise summaries from long text inputs. Runs entirely in the browser — no backend or API keys required.

🚀 Features

📝 Summarize long text instantly

⚡ Fully client-side (no backend needed)

🎨 Modern, responsive UI built with React + Tailwind CSS

✅ AI readiness check (🟢 AI Ready / 🟡 Waiting for AI)

⚠️ Handles errors gracefully

🗂️ Lightweight and fast

🛠️ Tech Stack

Frontend: React

Styling: Tailwind CSS

AI Integration: Puter.js (via <script> tag)

Build Tool: Vite

📁 Folder Structure
ai-text-summarizer/
├── public/
│   └── index.html        # Includes Puter.js script
├── src/
│   ├── App.jsx           # Main React component
│   ├── index.css         # Tailwind styles
│   └── main.jsx          # React entry point
├── package.json
└── README.md

🧠 How It Works

Checks if window.puter.ai.chat is ready.

Shows AI status: 🟢 AI Ready or 🟡 Waiting for AI.

User types/pastes text and clicks Summarize.

Text is sent to Puter.js AI via prompt:

Please summarize this, so that it can be understandable: {user text}


The AI returns a concise summary displayed in the app.

Errors (if any) are shown to the user.

📦 Installation & Usage

Clone the repo:

git clone https://github.com/your-username/ai-text-summarizer.git
cd ai-text-summarizer


Install dependencies:

npm install


Add Puter.js script in public/index.html:

<script src="https://js.puter.com/v2/"></script>


Start the development server:

npm run dev


Open the URL shown in your terminal (usually http://localhost:5173/) to use the app.

Build for production (optional):

npm run build


Preview production build:

npm run preview


💡 No backend or API keys required — fully client-side.

✅ Future Enhancements

Add theme toggle (light/dark)

Add export summary functionality

Add history tracking for past summaries

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

💬 Author
chamathkar

Chamathkar
Connect on GitHub: github.com/your-username
