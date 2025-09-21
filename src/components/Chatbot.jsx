import React, { useState, useRef } from 'react';

// Do not import the @google/generative-ai package at module load time.
// Instead, dynamically import it when the user requests a response.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

function Chatbot() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const clientRef = useRef(null);

  const runChat = async () => {
    if (!prompt) return;
    setLoading(true);
    setResponse('');

    if (!API_KEY) {
      setResponse('AI not configured. Set VITE_GEMINI_API_KEY to enable the chatbot.');
      setLoading(false);
      return;
    }

    try {
      if (!clientRef.current) {
        // dynamic import to avoid bundler/runtime errors if the package
        // isn't browser-compatible or isn't installed.
        const mod = await import('@google/generative-ai').catch((e) => {
          console.error('Failed to load generative-ai package', e);
          return null;
        });
        const GoogleGenerativeAI = mod?.GoogleGenerativeAI || mod?.default?.GoogleGenerativeAI || mod?.default;
        if (!GoogleGenerativeAI) {
          setResponse('Generative AI client not available. Install @google/generative-ai or use a server proxy.');
          setLoading(false);
          return;
        }

        clientRef.current = new GoogleGenerativeAI(API_KEY);
      }

      const genAI = clientRef.current;
      const model = genAI.getGenerativeModel ? genAI.getGenerativeModel({ model: 'gemini-pro' }) : null;

      const fullPrompt = `You are a helpful assistant for a university campus.\nAnswer the following student question concisely.\nKnown facts: Library hours are 9 AM - 8 PM. The CSE department office is in C-Wing, Room C201. The lost and found is at the main security gate.\nQuestion: "${prompt}"`;

      if (!model || !model.generateContent) {
        throw new Error('Generative model API not available');
      }

      const result = await model.generateContent(fullPrompt);

      // Safely extract text from different possible shapes
      let text = '';
      if (result?.response?.text) {
        text = typeof result.response.text === 'function' ? result.response.text() : String(result.response.text);
      } else if (result?.outputText) {
        text = String(result.outputText);
      } else {
        text = JSON.stringify(result?.response || result || 'No response');
      }

      setResponse(text);
    } catch (error) {
      console.error('Chatbot Error:', error);
      setResponse('Sorry, I\'m having trouble connecting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Campus FAQ Bot 🤖</h2>
      <p>Ask about library hours, CSE office, or lost &amp; found!</p>
      <div className="chat-box">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a question..."
        ></textarea>
        <button onClick={runChat} disabled={loading}>
          {loading ? 'Thinking...' : 'Ask'}
        </button>
        {response && (
          <div className="response">
            <strong>Answer:</strong>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chatbot;