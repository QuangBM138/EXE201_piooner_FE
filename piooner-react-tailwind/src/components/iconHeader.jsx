import { Link, useNavigate } from "react-router-dom";
import { RouteMap as RM, img } from "../utils/assets";

const SocialIcons = () => {
  const navigate = useNavigate();
  const handlePersonIconClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(RM.profileRoute); // Navigate to profile page if token exists
    } else {
      navigate(RM.login); // Navigate to login page if no token
    }
  };
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
      <div onClick={handlePersonIconClick} className="my-auto cursor-pointer">
        <img
          loading="lazy"
          src={img.personIcon}
          className="shrink-0 aspect-square w-[40px]"
          alt="person icon"
        />
      </div>
    </div>
  );
};

export default SocialIcons;
