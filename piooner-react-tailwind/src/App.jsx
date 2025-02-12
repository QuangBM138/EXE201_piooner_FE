import HomePage from "./pages/Homepage";
import AboutUsPage from "./pages/aboutus";
import ContactPage from "./pages/contact";
import CommunityPage from "./pages/Community";
import PayNoLogin from "./pages/payNoLogin";
import ProfilePage from "./pages/profile";
import { Routes, Route, useLocation } from "react-router-dom";
import { RouteMap as RM } from "./utils/assets";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import FollowOrder from "./pages/followOrder";
import ConfirmOrderPage from "./pages/ConfirmOrder";
import { PayPage } from "./pages/PayPage";
import CartPage from "./pages/cart";
import ProductPage from "./pages/product";
import NearOrderPage from "./pages/nOrder";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import ForgotPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div className="app flex flex-col pt-20 bg-white">
      <Header></Header>
      <Routes>
        <Route path={`/`} element={<HomePage />} /> {/* fix text and image*/}
        <Route path={RM.aboutUsRoute} element={<AboutUsPage />} /> {/* done*/}
        <Route path={RM.contactRoute} element={<ContactPage />} /> {/* done*/}
        <Route path={RM.communityRoute} element={<CommunityPage />} />
        {/* done*/}
        <Route path={RM.payNoLoginRoute} element={<PayNoLogin />} />
        {/* not yet map api*/}
        <Route path={RM.profileRoute} element={<ProfilePage />} />
        <Route path={RM.followOrderRoute} element={<FollowOrder />} />
        <Route path={RM.confirmOrderRoute} element={<ConfirmOrderPage />} />
        <Route path={RM.payPage} element={<PayPage />} />
        <Route path={RM.cartPage} element={<CartPage />} />
        <Route path={RM.productPage} element={<ProductPage />} />
        <Route path={RM.nearOrderPage} element={<NearOrderPage />} />
        <Route path={RM.login} element={<Login />} />
        <Route path={RM.signUp} element={<SignUp />} />
        <Route path={RM.forgetPwd} element={<ForgotPassword />} />
        <Route path={RM.resetPassword} element={<ResetPassword />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
