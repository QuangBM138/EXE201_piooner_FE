// import NavigationMenu from "./NavigationMenu";
// import SocialIcons from "./SocialIcons";

const NavigationMenu = () => (
  <ul className="flex gap-5 items-center mt-2.5 text-xl font-medium text-black max-md:flex-wrap">
    <li className="grow">
      <a href="#section1">Về Piorneer</a>
    </li>
    <li>
      <a href="#section2">Sáng tạo</a>
    </li>
    <li className="flex-auto">
      <a href="#section3">Cộng đồng</a>
    </li>
    <li>
      <a href="#section4">Liên hệ</a>
    </li>
  </ul>
);

const SocialIcons = () => (
  <div className="flex gap-5 justify-end">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/48cd14f3d11aa4d31117671c933dedeb451a90def8792c84a8e1ea690b2f55b2?apiKey=101cc284a7074779856ab37fb68fa7a5"
      className="shrink-0 my-auto aspect-square w-[21px]"
      alt="Social Icon 1"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/461f947539f04a0851e78fcdf04bbc4a6e8ae7db721c28c1116e194b8c2e201d?apiKey=101cc284a7074779856ab37fb68fa7a5"
      className="shrink-0 aspect-square w-[33px]"
      alt="Social Icon 2"
    />
  </div>
);

const Header = () => (
  <header className="flex flex-col pl-20 mt-2.5 w-full max-md:pl-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c94cef7de905c8b61a8ffc66a46a82ce3bda296e148a8cb37094e5c445b5c0?apiKey=101cc284a7074779856ab37fb68fa7a5"
        className="shrink-0 max-w-full aspect-[1.47] w-[166px]"
        alt="Logo"
      />

      <NavigationMenu />
      <SocialIcons />
    </div>
  </header>
);

export default Header;
