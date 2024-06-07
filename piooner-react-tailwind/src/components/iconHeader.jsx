import { RouteMap as RM, img } from "../utils/assets";

const SocialIcons = () => {
  return (
    <div className="flex gap-20 justify-end mr-20">
      <a href={RM.cartPage} className="my-auto">
        <img
          loading="lazy"
          src={img.cartIcon}
          className="shrink-0 my-auto aspect-square w-[40px]"
          alt="cart icon"
        />
      </a>

      <img
        loading="lazy"
        src={img.personIcon}
        className="shrink-0 aspect-square w-[40px]"
        alt="person icon"
      />
    </div>
  );
};

export default SocialIcons;
