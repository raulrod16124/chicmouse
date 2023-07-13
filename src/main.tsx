import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import App from './modules/App'
import './index.css'

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </BrowserRouter>
);
