import Stepper from "../components/steeper";

function ImageWithDescription({ src, alt, children }) {
  return (
    <div className="flex gap-4 mt-14 ml-4 max-md:mt-10 max-md:ml-2.5">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 aspect-square w-[35px]"
      />
      <div className="flex-auto my-auto">{children}</div>
    </div>
  );
}

function InputField({ id, label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col grow text-sm text-black max-md:mt-10">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-label={label}
        className="shrink-0 mt-2.5 bg-orange-100 h-[49px]"
      />
    </div>
  );
}

function RadioButton({ label }) {
  return (
    <div className="flex gap-3.5">
      <div className="shrink-0 w-5 h-5 bg-orange-100 rounded-full" />
      <div className="flex-auto my-auto">{label}</div>
    </div>
  );
}

export function PayPage() {
  const isActive = [false, false, true];
  return (
    <section className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col grow items-start mr-auto text-xl text-amber-700 max-md:mt-10">
        <ImageWithDescription
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8838b2f95e562b2150c8da87da44ae776588952e5ba8dd5b6fdecee29340b809?apiKey=101cc284a7074779856ab37fb68fa7a5&"
          alt=""
        />
      </div>
      <Stepper isActive={isActive} />
      <hr className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1156px] max-md:mt-10" />
      <header className="flex gap-5 self-start mt-16 ml-24 text-3xl font-bold text-black max-md:mt-10 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7dee9faadb548c272d75df0de8823751ca8bf83782b7237fe7edc5353f7c302?apiKey=101cc284a7074779856ab37fb68fa7a5&"
          alt=""
          className="shrink-0 aspect-[1.19] w-[58px]"
        />
        <div className="flex-auto my-auto">Thanh toán</div>
      </header>
      <div className="flex gap-5 justify-between mt-5 w-full max-w-[1156px] max-md:flex-wrap max-md:max-w-full">
        <form className="flex flex-col self-end mt-16 max-md:mt-10 max-md:max-w-full">
          <h2 className="self-center text-xl font-bold text-black">
            Thông tin giao hàng
          </h2>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <InputField id="lastName" label="Họ" placeholder="Họ" />
                <InputField
                  id="phoneNumber"
                  label="Số điện thoại"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InputField id="firstName" label="Tên" placeholder="Tên" />
                <InputField
                  id="email"
                  type="email"
                  label="Địa chỉ Email"
                  placeholder="Địa chỉ Email"
                />
              </div>
            </div>
            <InputField
              id="city"
              label="Tỉnh/Thành phố"
              placeholder="Tỉnh/Thành phố"
            />
            <InputField
              id="district"
              label="Quận/Huyện"
              placeholder="Quận/Huyện"
            />
            <InputField id="ward" label="Phường/Xã" placeholder="Phường/Xã" />
            <InputField id="address" label="Địa chỉ" placeholder="Địa chỉ" />
            <button
              type="submit"
              className="justify-center items-center self-center px-16 py-4 mt-12 max-w-full text-xl font-bold text-center text-white bg-pioonerCraft w-[387px] max-md:px-5 max-md:mt-10"
            >
              Xác nhận
            </button>
          </div>
        </form>
        <hr className="shrink-0 w-px bg-black border border-black border-solid h-[795px]" />
        <div className="flex flex-col my-auto max-md:max-w-full">
          <h2 className="self-center text-xl font-bold text-center text-black">
            Hình thức thanh toán
          </h2>
          <h3 className="mt-10 text-sm font-bold text-black max-md:max-w-full">
            Phương thức vận chuyển
          </h3>
          <div className="flex gap-5 justify-between mt-6 text-sm text-black max-md:flex-wrap">
            <RadioButton label="Giao Hàng Tiết Kiệm" />
            <RadioButton label="Giao Hàng Nhanh" />
          </div>
          <h3 className="mt-7 text-sm font-bold text-black max-md:max-w-full">
            Phương thức thanh toán
          </h3>
          <RadioButton label="Thanh toán khi nhận hàng" />
          <RadioButton label="Thanh toán bằng thẻ ATM/Visa/Master/JCB/QRCode qua Payoo" />
          <p className="self-start mt-2 ml-8 text-sm italic font-light text-black max-md:ml-2.5">
            Bạn sẽ chuyển tới trang thanh toán của thẻ
          </p>
          <h3 className="mt-6 text-sm font-bold text-black max-md:max-w-full">
            Ghi chú đơn hàng
          </h3>
          <textarea
            className="shrink-0 mt-6 bg-orange-100 h-[153px] max-md:max-w-full"
            placeholder="Ghi chú đơn hàng"
          />
          <h2 className="self-center mt-10 text-xl font-bold text-center text-black">
            TỔNG TIỀN
          </h2>
          <div className="px-14 py-9 mt-7 bg-pioonerCraft max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                <p className="text-sm font-bold leading-6 text-stone-50 max-md:mt-10">
                  Số lượng <br /> Tạm tính <br /> Ưu đãi mua chung <br /> Phí
                  vận chuyển
                </p>
              </div>
              <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                <p className="text-sm font-bold leading-6 text-right text-stone-50 max-md:mt-10">
                  3<br /> 2.500.000 VND <br />- 500.000 VND <br />0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
