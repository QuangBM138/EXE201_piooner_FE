import HomePage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app flex flex-col pt-20 bg-white">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
