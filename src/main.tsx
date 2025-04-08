
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a root and render App to ensure React context is properly set up
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(<App />);
