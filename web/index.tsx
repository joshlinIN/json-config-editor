import { createRoot } from "react-dom/client"
import { App } from "./App"

let el = document.querySelector("#react-root")


createRoot(el).render(<App />)
