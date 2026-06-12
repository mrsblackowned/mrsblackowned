import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Self-hosted fonts — eliminates Google Fonts DNS/CSS roundtrip
import "@fontsource/cormorant-garamond/latin-400.css"
import "@fontsource/cormorant-garamond/latin-400-italic.css"
import "@fontsource/cormorant-garamond/latin-500.css"
import "@fontsource/cormorant-garamond/latin-500-italic.css"
import "@fontsource/cormorant-garamond/latin-600.css"
import "@fontsource/cormorant-garamond/latin-700.css"
import "@fontsource-variable/montserrat/index.css"
import "@fontsource/great-vibes/400.css"

// Media Kit fonts
import "@fontsource/lora/400.css"
import "@fontsource/lora/400-italic.css"
import "@fontsource/lora/500.css"
import "@fontsource/lora/600.css"
import "@fontsource/lora/700.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"

import App from "./App"
import "./index.css"

gsap.registerPlugin(ScrollTrigger)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
