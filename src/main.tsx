import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './context/LanguageContext';
import App from './modules/App'
import './index.css'

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
);