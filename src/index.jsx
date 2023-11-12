import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { AppProvider } from "./Components/context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <AppProvider>
    <App />
  </AppProvider>
)
