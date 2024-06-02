function Header() {
  return (
    <header className="flex flex-col pt-20 bg-white">
      <div className="flex flex-col pl-20 mt-2.5 w-full max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-center w-full max-w-[1244px] max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c94cef7de905c8b61a8ffc66a46a82ce3bda296e148a8cb37094e5c445b5c0?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            alt="Logo"
            className="shrink-0 max-w-full aspect-[1.47] w-[166px]"
          />
          <nav className="flex gap-5 justify-between self-start mt-2 max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 self-start mt-2.5 text-xl font-medium text-black max-md:flex-wrap">
              <a className="grow" href="#about">
                Về Pioneer
              </a>
              <a href="#creative">Sáng tạo</a>
              <a className="flex-auto" href="#community">
                Cộng đồng
              </a>
              <a href="#contact">Liên hệ</a>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="flex justify-center items-center px-2 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6d851ae44557b9a5cccc73e1d7a5e4a7e7842dad80aff0fda79e92a07f3376d?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  alt="Icon 1"
                  className="aspect-square w-[21px]"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/461f947539f04a0851e78fcdf04bbc4a6e8ae7db721c28c1116e194b8c2e201d?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                alt="Icon 2"
                className="shrink-0 aspect-square w-[33px]"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function AboutUs() {
  return (
    <main className="mt-14 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col grow max-md:max-w-full">
            <h1 className="self-end mr-14 text-6xl font-extrabold text-center leading-[60px] text-stone-600 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Pioneer Craft <br />
              <span className="text-4xl font-light">
                Khám Phá Sứ Mệnh và Nguồn Cảm Hứng
              </span>
            </h1>
          </header>
          <section className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/866978714a641f903762d0545a1b267cc846e6cc0a5cbc3b2bf0af89636a1eb3?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  alt="Pioneer Craft example"
                  className="grow w-full aspect-[0.88] rounded-[250px_250px_0px_0px] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <p className="flex flex-col text-base text-stone-600 max-md:max-w-full">
                  Pioneer Craft là sự kết hợp đầy sáng tạo của một nhóm bạn trẻ
                  yêu thích nghệ thuật và sáng tạo. Chúng tôi tin rằng mỗi sản
                  phẩm gốm mang trong mình một câu chuyện độc đáo và tinh thần
                  sáng tạo. Với trải nghiệm mua sắm trực tuyến tương tác, chúng
                  tôi mang đến cho khách hàng những sản phẩm gốm chất lượng cao
                  và trải nghiệm mua sắm đáng nhớ.
                </p>
                <section className="flex flex-col pl-20 mt-16 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <p className="ml-3.5 w-[401px] max-md:max-w-full">
                    Tại Pioneer Craft, chúng tôi không chỉ bán các sản phẩm gốm
                    chất lượng cao mà còn mang lại trải nghiệm mua sắm trực
                    tuyến đáng nhớ. Với một sự kết hợp tinh tế giữa truyền thống
                    và hiện đại, chúng tôi tạo ra những sản phẩmốm độc đáo với
                    sự kết hợp giữa nghệ thuật thủ công và công nghệ hiện đại.
                  </p>
                  <p className="self-end mt-16 w-[393px] max-md:mt-10">
                    Bằng cách kết hợp website tương tác tiện lợi và một đội ngũ
                    phục vụ chuyên nghiệp, Pioneer Craft cam kết mang lại trải
                    nghiệm mua sắm trực tuyến tuyệt vời nhất cho khách hàng.
                    Chúng tôi luôn lắng nghe ý kiến phản hồi từ khách hàng để
                    không ngừng cải thiện và phát triển, vì chúng tôi tin rằng
                    sự hài lòng của khách hàng là tiêu chí hàng đầu của chúng
                    tôi.
                  </p>
                </section>
              </div>
            </div>
          </section>
        </section>
        <aside className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8634be835d13d7b714baa67ee9c7efdf27c633a816c165bd2264bde3ec618209?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            alt="Decorative Image"
            className="shrink-0 mt-28 max-w-full aspect-[0.71] w-[304px] max-md:mt-10"
          />
        </aside>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col justify-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
      <section className="flex justify-center items-center px-16 py-20 w-full bg-slate-500 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 mb-1.5 w-full max-w-[1117px] max-md:flex-wrap max-md:max-w-full">
          <section className="flex flex-col">
            <div className="flex gap-3">
              <figure className="flex flex-col">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/183dfff3eefdf36636928fe6f8f5b3dd0eb853af367de2a2849f6b4f83ed903e?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  alt="Decorative Icon"
                  className="ml-4 aspect-[0.7] fill-orange-100 w-[7px] max-md:ml-2.5"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3fc6a36bcb4172b0630d6339b31e423a98e89a30b7857c5117caa05325b592e?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  alt="Decorative Text"
                  className="self-center aspect-[2] fill-orange-100 w-[150px]"
                />
              </figure>
              <figure className="flex flex-col my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/54a88111b633886dcdd02d0abfd92cfaab1f3ebb4e39b68339436acdee2de79c?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  alt="Decorative Icon 2"
                  className="self-center aspect-[10] w-[225px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dc9c5836c44b638df7e655d086229b5604bf047d2f032c86d009a8265c6e5be?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                  alt="Decorative Text 2"
                  className="aspect-[3.33] w-[63px]"
                />
              </figure>
            </div>
            <h2 className="mt-6 text-xl font-light text-amber-50">
              ĐĂNG KÝ ĐỂ NHẬN NHIỀU ƯU ĐÃI
            </h2>
            <form
              aria-label="Email subscription"
              className="flex gap-3 mt-4 text-center"
            >
              <label htmlFor="emailInput" className="sr-only">
                Enter your email
              </label>
              <input
                className="grow justify-center items-center px-16 py-3.5 text-xs font-light bg-amber-50 text-slate-500 w-fit max-md:px-5"
                type="email"
                id="emailInput"
                placeholder="Email Address"
                aria-label="Enter your email"
              />
              <button className="justify-center px-5 py-3 text-sm font-semibold text-amber-50 bg-orange-300">
                ĐĂNG KÝ
              </button>
            </form>
            <div className="flex gap-5 mt-5 text-sm text-amber-50">
              <p className="grow">HOTLINE: 1900 1716</p>
              <p className="flex-auto">EMAIL: support@piorneercraft.com</p>
            </div>
            <div className="flex gap-3.5 self-start mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d52a0df2d0288a95cdc4e4b3732c1f52b9444d6adea7719b424edd692268fd?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                alt="Icon 3"
                className="shrink-0 aspect-[0.55] w-[11px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f95c8be7dad46b7594fb2f4e0168945363d8ade838b0068f591d8cdb8639b5?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                alt="Icon 4"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
          </section>
          <div className="flex-auto my-auto max-md:max-w-full">
            <nav className="flex gap-5 max-md:flex-col max-md:gap-0">
              <section className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-sm font-light text-amber-50 max-md:mt-10">
                  <h3 className="text-xl font-medium">Trợ giúp</h3>
                  <p className="mt-5">Dịch vụ Khách hàng</p>
                  <p className="mt-3.5">Tài khoản của tôi</p>
                  <p className="mt-4">Các điều khoản và điều kiện</p>
                  <p className="mt-3.5">Pháp lý & Bảo mật</p>
                  <p className="mt-3.5">Liên hệ</p>
                </div>
              </section>
              <section className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-sm font-light text-amber-50 max-md:mt-10">
                  <h3 className="text-xl font-medium">Mua sắm</h3>
                  <p className="mt-6">Giao hàng</p>
                  <p className="mt-3.5">Thanh toán</p>
                  <p className="mt-4">Trả hàng</p>
                </div>
              </section>
              <section className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-amber-50 max-md:mt-10">
                  <h3 className="text-xl font-medium">Về chúng tôi</h3>
                  <p className="mt-5 text-sm font-light">Giới thiệu</p>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7d2c465e52b8f8a85156b5c72b9af7efb3f0624768023c9e467df779fca7a93?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                    alt="Decorative Logo"
                    className="mt-3 aspect-[2.7] w-[71px]"
                  />
                </div>
              </section>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default AboutUs;
