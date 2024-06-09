import { Link } from "react-router-dom";
import { RouteMap as RM, img } from "../utils/assets";

const SocialIcons = () => {
  return (
    <div className="flex gap-20 justify-end mr-20">
      <Link to={RM.cartPage} className="my-auto">
        <img
          loading="lazy"
          src={img.cartIcon}
          className="shrink-0 my-auto aspect-square w-[40px]"
          alt="cart icon"
        />
      </Link>
      <Link to={RM.login} className="my-auto">
        <img
          loading="lazy"
          src={img.personIcon}
          className="shrink-0 aspect-square w-[40px]"
          alt="person icon"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
