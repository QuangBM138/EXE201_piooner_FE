import HomePage from "./pages/Homepage";
import AboutUsPage from "./pages/aboutus";
import ContactPage from "./pages/contact";
import CommunityPage from "./pages/Community";
import { Routes, Route } from "react-router-dom";
import { RouteMap } from "./utils/links";
import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="app flex flex-col pt-20 bg-white">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Community" element={<CommunityPage />} />
        {/* <Route path="/Create" element={<Create />} /> */}
        {/* <Route path="/Product" element={<Product />} /> */}
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Register" element={<Register />} /> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
