import HomePage from "./pages/Homepage";
import AboutUsPage from "./pages/aboutus";
import ContactPage from "./pages/contact";
import CommunityPage from "./pages/Community";
import PayNoLogin from "./pages/payNoLogin";
import ProfilePage from "./pages/profile";
import { Routes, Route } from "react-router-dom";
import { RouteMap as RM } from "./utils/assets";
import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="app flex flex-col pt-20 bg-white">
      <Header></Header>
      <Routes>
        <Route path={RM.homeRoute} element={<HomePage />} />
        <Route path={RM.aboutUsRoute} element={<AboutUsPage />} />
        <Route path={RM.contactRoute} element={<ContactPage />} />
        <Route path={RM.communityRoute} element={<CommunityPage />} />
        <Route path={RM.payNoLoginRoute} element={<PayNoLogin />} />
        <Route path={RM.profileRoute} element={<ProfilePage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
