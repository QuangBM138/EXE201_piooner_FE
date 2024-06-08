import { Link } from "react-router-dom";
import { RouteMap as RM, img } from "../utils/assets";
import SocialIcons from "./iconHeader";

const NavigationMenu = () => (
  <ul className="flex gap-20 items-center mb-5 text-xl font-medium text-black max-md:flex-wrap ">
    <li className="grow">
      <Link to={RM.aboutUsRoute}>Về Piorneer</Link>
    </li>
    {/* <li>
      <Link to="#section2">Sáng tạo</a>
    </li> */}
    <li>
      <Link to={RM.productPage}>Mua hàng</Link>
    </li>
    <li className="flex-auto">
      <Link to={RM.communityRoute}>Cộng đồng</Link>
    </li>
    <li>
      <Link to={RM.contactRoute}>Liên hệ</Link>
    </li>
  </ul>
);

// const SocialIcons = () => (
//   <div className="flex gap-20 justify-end mr-20">
//     <img
//       loading="lazy"
//       src={img.cartIcon}
//       className="shrink-0 my-auto aspect-square w-[40px]"
//       alt="cart icon"
//     />
//     <img
//       loading="lazy"
//       src={img.personIcon}
//       className="shrink-0 aspect-square w-[40px]"
//       alt="person icon"
//     />
//   </div>
// );

const Header = () => (
  <header className="flex flex-col pl-20 mb-0.5 w-full max-md:pl-5 max-md:max-w-full fixed top-0 z-50 bg-white">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <Link to={RM.homeRoute}>
        <img
          loading="lazy"
          src={img.logoImg}
          className="shrink-0 max-w-full aspect-[1.47] w-[166px]"
          alt="Logo"
        />
      </Link>

      <NavigationMenu />
      <SocialIcons />
    </div>
  </header>
);

export default Header;
