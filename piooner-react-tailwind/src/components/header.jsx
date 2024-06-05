import { RouteMap as RM, img } from "../utils/assets";

const NavigationMenu = () => (
  <ul className="flex gap-20 items-center mb-5 text-xl font-medium text-black max-md:flex-wrap ">
    <li className="grow">
      <a href={RM.aboutUsRoute}>Về Piorneer</a>
    </li>
    <li>
      <a href="#section2">Sáng tạo</a>
    </li>
    <li>
      <a href="#section2">Mua hàng</a>
    </li>
    <li className="flex-auto">
      <a href={RM.communityRoute}>Cộng đồng</a>
    </li>
    <li>
      <a href={RM.contactRoute}>Liên hệ</a>
    </li>
  </ul>
);

const SocialIcons = () => (
  <div className="flex gap-20 justify-end mr-20">
    <img
      loading="lazy"
      src={img.cartIcon}
      className="shrink-0 my-auto aspect-square w-[40px]"
      alt="cart icon"
    />
    <img
      loading="lazy"
      src={img.personIcon}
      className="shrink-0 aspect-square w-[40px]"
      alt="person icon"
    />
  </div>
);

const Header = () => (
  <header className="flex flex-col pl-20 mb-0.5 w-full max-md:pl-5 max-md:max-w-full fixed top-0 z-50 ">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <a href={RM.homeRoute}>
        <img
          loading="lazy"
          src={img.logoImg}
          className="shrink-0 max-w-full aspect-[1.47] w-[166px]"
          alt="Logo"
        />
      </a>

      <NavigationMenu />
      <SocialIcons />
    </div>
  </header>
);

export default Header;
