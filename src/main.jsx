import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.jsx'
import {Theme} from "@radix-ui/themes";
import HtmlTitle from "@components/HtmlTitle.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Theme appearance="dark">
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Theme>
  </StrictMode>,
)
