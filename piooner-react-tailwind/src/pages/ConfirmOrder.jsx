import Stepper from "../components/steeper";

// eslint-disable-next-line react/prop-types
function ProductItem({ color, size, quantity }) {
  return (
    <div className="mt-7 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto w-36 h-36 rounded-xl bg-stone-300 max-md:mt-8" />
        </div>
        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-sm text-neutral-900 max-md:mt-10">
            <p>Bình cắm hoa</p>
            <div className="flex gap-3 mt-4 whitespace-nowrap">
              <p className="text-center">Màu</p>
              <p className="flex-auto font-medium">{color}</p>
            </div>
            <div className="flex gap-3 mt-4 whitespace-nowrap">
              <p className="text-center">Size</p>
              <p className="flex-auto font-medium">{size}</p>
            </div>
            <div className="flex gap-5 py-px pr-20 pl-7 mt-3.5 text-base leading-4 text-black whitespace-nowrap border border-solid border-stone-800 max-md:px-5">
              <div className="flex gap-5 justify-between items-center">
                <button
                  className="self-stretch my-auto"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="shrink-0 self-stretch w-px h-7 border border-solid bg-neutral-900 border-neutral-900" />
                <p className="self-stretch my-auto">{quantity}</p>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0 w-px h-7 border border-solid bg-neutral-900 border-neutral-900" />
                <button className="my-auto" aria-label="Increase quantity">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmOrderPage() {
  const products = [
    { color: "Đen", size: "Medium", quantity: 1 },
    { color: "Đen", size: "Medium", quantity: 1 },
    { color: "Đen", size: "Medium", quantity: 1 },
  ];
  const isActive = [false, true, false];

  return (
    <div className="flex flex-col pt-20 bg-white">
      <nav className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-3.5 self-start mt-14 ml-8 text-xl text-amber-700 max-md:mt-10 max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d7f458c7df24594ed236d20b93c7acc783644090b2abc569f9263496ba8f8f?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            className="shrink-0 aspect-square w-[35px]"
            alt=""
          />
          <div className="flex-auto my-auto">
            <span>Giỏ hàng/ </span>
            <span className="text-amber-700">Xác nhận đơn hàng</span>
          </div>
        </div>
        <Stepper isActive={isActive} />
        <hr className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1156px] max-md:mt-10" />
      </nav>

      <main className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <header className="flex gap-3.5 self-start mt-14 ml-24 text-3xl font-bold text-stone-800 max-md:mt-10 max-md:ml-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d49ea129a4a79033101053d80ebb02760bc75a477e276ac06f3298c6520d2079?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            className="shrink-0 aspect-square w-[73px]"
            alt=""
          />
          <div className="flex-auto my-auto">Xác nhận đơn hàng</div>
        </header>

        <section className="mt-16 w-full max-w-[1155px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <section className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <h2 className="text-xl font-bold text-center text-stone-800 max-md:max-w-full">
                SẢN PHẨM
              </h2>
              {products.map((product, index) => (
                <ProductItem
                  key={index}
                  color={product.color}
                  size={product.size}
                  quantity={product.quantity}
                />
              ))}
              <button className="justify-center items-center self-end px-16 py-4 mt-24 max-w-full text-base font-bold text-center text-white bg-pioonerCraft w-[387px] max-md:px-5 max-md:mt-10">
                Xác nhận đơn hàng
              </button>
            </section>

            <section className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 text-xl font-bold text-center text-black max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/90480d8ae2469aed7af88bca6e86f00fbf7af4d047e6fcaf50d4e93433858331?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  className="shrink-0 w-px border border-black border-solid aspect-[0] stroke-[1px] stroke-black"
                  alt=""
                />
                <div className="flex flex-col grow shrink-0 items-center my-auto basis-0 w-fit max-md:max-w-full">
                  <label htmlFor="coupon" className="sr-only">
                    NHẬP MÃ COUPON ƯU ĐÃI
                  </label>
                  <input
                    id="coupon"
                    className="justify-center items-center px-16 py-4 mt-5 max-w-full text-base bg-pioonerCraft text-stone-50 w-[387px] max-md:px-5"
                    type="text"
                    placeholder="Nhập mã giảm giá"
                    aria-label="Nhập mã giảm giá"
                  />
                  <p className="mt-5 text-sm">
                    Chỉ sử dụng 1 mã cho 1 đơn hàng
                  </p>
                  <div className="flex flex-col self-stretch px-12 py-10 mt-14 text-yellow-50 bg-pioonerCraft max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <p className="self-center">QUÀ TẶNG</p>
                    <div className="shrink-0 mt-7 bg-orange-100 h-[133px] max-md:max-w-full" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <div className="flex flex-col justify-center mt-28 w-full max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

export default ConfirmOrderPage;
