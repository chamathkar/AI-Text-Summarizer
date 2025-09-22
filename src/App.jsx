import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [summarizedText, setSummarizedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [aiReady, setAiReady] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Check if Puter AI is ready
  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter && window.puter.ai && typeof window.puter.ai.chat === "function") {
        setAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);

    return () => clearInterval(checkReady);
  }, []);

  // Summarize text
  const summarizeText = async () => {
    setLoading(true);
    setError("");
    setSummarizedText("");
    try {
      const response = await window.puter.ai.chat(
        `Please summarize this so that it can be understandable: ${text}`
      );
      setSummarizedText(response.message?.content || "No summary available");
    } catch (err) {
      setError(err.message || "Failed to summarize text");
    } finally {
      setLoading(false);
    }
  };

  // Copy summary to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(summarizedText);
    alert("Summary copied to clipboard! 📋");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start p-6 gap-8 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-rose-950 via-slate-950 to-purple-900 text-white"
          : "bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <h1 className="text-6xl sm:text-8xl bg-gradient-to-r from-blue-500 via-rose-500 to-indigo-500 bg-clip-text text-transparent text-center mt-6">
        AI Text Summarizer
      </h1>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition text-white"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* AI Status */}
      <div
        className={`px-4 py-2 rounded-full text-sm ${
          aiReady
            ? "bg-green-500/20 text-green-300 border border-green-500/30"
            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
        }`}
      >
        {aiReady ? "🟢 AI Ready" : "🟡 Waiting for AI..."}
      </div>

      {/* Input Card */}
      <div
        className={`w-full max-w-2xl p-6 rounded-3xl shadow-2xl flex flex-col gap-4 transition-colors duration-500 ${
          darkMode
            ? "bg-gray-800/90 border border-gray-600"
            : "bg-white/90 border border-gray-300"
        }`}
      >
        <textarea
          className={`w-full h-40 p-4 rounded-2xl border focus:outline-none focus:ring-2 transition duration-300 resize-none shadow-xl ${
            darkMode
              ? "bg-gray-700/80 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-400 focus:shadow-indigo-700/70"
              : "bg-gray-100 border-gray-300 text-gray-800 placeholder-gray-500 focus:ring-indigo-500 focus:shadow-indigo-300/70"
          }`}
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!aiReady}
        ></textarea>

        <button
          onClick={summarizeText}
          disabled={!aiReady || loading || !text.trim()}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500 transition text-white"
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Summary Output */}
      {summarizedText && (
        <div
          className={`w-full max-w-2xl p-6 rounded-3xl shadow-2xl transition-colors duration-500 ${
            darkMode
              ? "bg-gray-800/90 border border-gray-600 text-white"
              : "bg-white/90 border border-gray-300 text-gray-900"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2">Summary:</h2>
          <p className="mb-4">{summarizedText}</p>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition text-white"
          >
            📋 Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
