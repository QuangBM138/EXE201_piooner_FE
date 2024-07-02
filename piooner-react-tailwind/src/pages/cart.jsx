import { useEffect, useState } from "react";
import { img, RouteMap as RM } from "../utils/assets";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorModal from "../components/ModelError";

// eslint-disable-next-line react/prop-types
function QuantityControl({ quantity, onQuantityChange }) {
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1); // Call the passed onQuantityChange function
    }
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1); // Call the passed onQuantityChange function
  };

  return (
    <div className="flex gap-5 justify-between px-3.5 py-px text-base leading-4 text-black whitespace-nowrap border border-solid border-neutral-900">
      <div className="flex gap-5 justify-between items-center">
        <button
          className="flex gap-5 justify-between items-center self-stretch my-auto focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="shrink-0 self-stretch w-px h-10 border border-solid bg-neutral-300 border-neutral-300"></div>
        <div className="self-stretch my-auto">{quantity}</div>
      </div>
      <div className="flex gap-3">
        <div className="shrink-0 w-px h-10 border border-solid bg-neutral-300 border-neutral-300"></div>
        <button
          className="flex gap-3 self-stretch my-auto focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CartItem({ price, imgUrl, quantity, onQuantityChange, onRemove }) {
  return (
    <div className="flex grid md:grid-cols-12  items-start mt-16 max-md:mt-10 w-6/12 items-center text-orange-500">
      <div className="col-span-8">
        <img
          loading="lazy"
          src={imgUrl}
          alt="product"
          className="shrink-0 aspect-[0.94] w-[200px]"
        />
      </div>
      <div className="flex w-5/12">
        <QuantityControl
          className="col-span-2"
          quantity={quantity}
          onQuantityChange={onQuantityChange}
        />
        <div className="col-span-2 text-sm font-medium text-neutral-900 mr-[100px] ml-[50px] w-full flex items-center text-orange-500">
          <span>{price.toLocaleString()}</span>&nbsp;VND
        </div>
        <img
          loading="lazy"
          src={img.deleteIcon}
          alt="delete icon"
          className="shrink-0 aspect-[0.94] w-[17px] col-span-2  cursor-pointer"
          onClick={onRemove}
        />
      </div>
    </div>
  );
}

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const location = useLocation();

  const navigate = useNavigate();

  const handlePayNoLogin = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate(RM.payNoLoginRoute); // Navigate to payNoLogin page
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    const cartData = {
      totalPrice: totalPrice,
      totalQuantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    };
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartItems, totalPrice]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  };

  const handleRemoveProduct = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <section className="flex flex-col pt-20 bg-white">
      <div className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1249px] max-md:flex-wrap max-md:max-w-full"></div>
        <header className="self-center mt-32 ml-20 text-3xl font-bold text-stone-800 max-md:mt-10 max-md:ml-2.5">
          Giỏ hàng của bạn
        </header>
        {cartItems.length === 0 ? ( // Check for empty cart
          <ErrorModal
            message="Giỏ hàng của bạn hiện đang trống."
            onClose={handleBackClick} // Go back or to home page
          />
        ) : (
          <>
            <div className="flex grid md:grid-cols-9 self-center py-4 pr-16 pl-7 mt-9 ml-20 max-w-full text-sm font-medium bg-orange-100 text-stone-800 w-7/12 max-md:flex-wrap max-md:px-5">
              <div className="col-span-6">SẢN PHẨM</div>
              <div className="col-span-3 grid md:grid-cols-4 flex gap-x-20 w-3/12">
                <div className="col-span-2">SỐ LƯỢNG</div>
                <div className="col-span-2">GIÁ</div>
              </div>
            </div>

            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                price={item.price}
                imgUrl={item.imgUrl}
                quantity={item.quantity}
                // Pass the onQuantityChange function as a prop
                onQuantityChange={(newQuantity) => {
                  const updatedCartItems = cartItems.map((cartItem) =>
                    cartItem.id === item.id
                      ? { ...cartItem, quantity: newQuantity }
                      : cartItem
                  );
                  setCartItems(updatedCartItems);
                  // Call calculateTotalPrice directly after updating cartItems
                  calculateTotalPrice();
                }}
                onRemove={() => handleRemoveProduct(item.id)}
              />
            ))}

            <div className="flex gap-5 items-start mt-20 w-full text-sm font-medium max-w-[1090px] text-stone-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto self-end mt-9">Ghi chú đơn hàng</div>
              <div className="flex flex-col flex-1 self-end">
                <div className="self-end text-sm font-bold">TỔNG HÓA ĐƠN</div>
                <div className="mt-4  self-end col-span-12   text-orange-500">
                  {totalPrice.toLocaleString()} VND
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-8 w-full text-base font-medium text-center max-w-[1154px] text-stone-50 max-md:flex-wrap max-md:max-w-full">
              <div className="shrink-0 max-w-full bg-neutral-900 bg-opacity-30 h-[58px] w-[791px]"></div>
              <button
                className="justify-center items-center self-start px-16 py-4 bg-pioonerCraft max-md:px-5"
                onClick={handlePayNoLogin}
              >
                Thanh toán
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CartPage;
