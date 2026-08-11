import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";

import './App.css';



function App() {

  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column" data-bs-theme="dark">
      <Header />

      <main className="flex-grow-1">
        <AllRoutes />
      </main>

      <Footer />
    </div>
  )
}

export default App
