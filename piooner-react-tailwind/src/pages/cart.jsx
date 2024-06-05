function QuantityControl({ quantity }) {
  return (
    <div className="flex gap-5 justify-between px-3.5 py-px text-base leading-4 text-black whitespace-nowrap border border-solid border-neutral-900">
      <div className="flex gap-5 justify-between items-center">
        <div className="self-stretch my-auto">-</div>
        <div className="shrink-0 self-stretch w-px h-7 border border-solid bg-neutral-300 border-neutral-300"></div>
        <div className="self-stretch my-auto">{quantity}</div>
      </div>
      <div className="flex gap-3">
        <div className="shrink-0 w-px h-7 border border-solid bg-neutral-300 border-neutral-300"></div>
        <div className="my-auto">+</div>
      </div>
    </div>
  );
}

function CartItem({ price, imgUrl, altText }) {
  return (
    <div className="flex gap-5 justify-between items-start mt-16 ml-24 max-md:mt-10">
      <QuantityControl quantity={1} />
      <div className="text-sm font-medium text-neutral-900">{price} VND</div>
      <img
        loading="lazy"
        src={imgUrl}
        alt={altText}
        className="shrink-0 aspect-[0.94] w-[17px]"
      />
    </div>
  );
}

function CartPage() {
  return (
    <section className="flex flex-col pt-20 bg-white">
      <div className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1249px] max-md:flex-wrap max-md:max-w-full"></div>
        <header className="self-start mt-32 ml-20 text-3xl font-bold text-stone-800 max-md:mt-10 max-md:ml-2.5">
          Giỏ hàng của bạn
        </header>
        <div className="flex gap-5 justify-between self-start py-4 pr-16 pl-7 mt-9 ml-20 max-w-full text-sm font-medium bg-orange-100 text-stone-800 w-[791px] max-md:flex-wrap max-md:px-5">
          <div>SẢN PHẨM</div>
          <div className="flex gap-5 justify-between">
            <div>SỐ LƯỢNG</div>
            <div>GIÁ</div>
          </div>
        </div>

        <CartItem
          price="600.000"
          imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5304d41ebeb39e4b0394846dab3cb20f0264690dc5045b60e97f81efe339ae39?apiKey=101cc284a7074779856ab37fb68fa7a5&"
          altText="Product 1"
        />
        <CartItem
          price="600.000"
          imgUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8f18b5c31bac4bfda6fcfcfe2d84b16ea2d63ffd8734caf8f71b064c53910f2f?apiKey=101cc284a7074779856ab37fb68fa7a5&"
          altText="Product 2"
        />

        <div className="shrink-0 self-start mt-24 ml-20 max-w-full h-px bg-black border border-black border-solid w-[791px] max-md:mt-10"></div>
        <div className="flex gap-5 justify-between items-start mt-9 ml-24">
          <QuantityControl quantity={1} />
          <div className="text-sm font-medium text-neutral-900">
            600.000 VND
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f18b5c31bac4bfda6fcfcfe2d84b16ea2d63ffd8734caf8f71b064c53910f2f?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            alt="Product 3"
            className="shrink-0 aspect-[0.94] w-[17px]"
          />
        </div>
        <div className="flex gap-5 items-start mt-20 w-full text-sm font-medium max-w-[1090px] text-stone-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto self-end mt-9">Ghi chú đơn hàng</div>
          <div className="flex flex-col flex-1 self-start">
            <div>TỔNG HÓA ĐƠN</div>
            <div className="mt-4">1.200.000 VND</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-8 w-full text-base font-medium text-center max-w-[1154px] text-stone-50 max-md:flex-wrap max-md:max-w-full">
          <div className="shrink-0 max-w-full bg-neutral-900 bg-opacity-30 h-[58px] w-[791px]"></div>
          <button className="justify-center items-center self-start px-16 py-4 bg-slate-500 max-md:px-5">
            Thanh toán
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
