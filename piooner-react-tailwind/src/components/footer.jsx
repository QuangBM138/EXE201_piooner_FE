const Layout = ({ children }) => (
  <div className="flex flex-col ">{children}</div>
);

const Footer = () => (
  <footer className="flex items-center px-16 py-20 mt-28 w-full bg-[#547B80] max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="justify-between flex gap-5 mb-3 w-full max-md:flex-wrap max-md:max-w-full">
      <section className="flex flex-col">
        <div className="flex gap-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/183dfff3eefdf36636928fe6f8f5b3dd0eb853af367de2a2849f6b4f83ed903e?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            className="ml-4 aspect-[0.7] fill-orange-100 w-[7px] max-md:ml-2.5"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3fc6a36bcb4172b0630d6339b31e423a98e89a30b7857c5117caa05325b592e?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            className="self-center aspect-[2] fill-orange-100 w-[100px] h-[100px]"
            alt=""
          />
          <div className="justify-center my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54a88111b633886dcdd02d0abfd92cfaab1f3ebb4e39b68339436acdee2de79c?apiKey=101cc284a7074779856ab37fb68fa7a5"
              className="aspect-[10] w-auto"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dc9c5836c44b638df7e655d086229b5604bf047d2f032c86d009a8265c6e5be?apiKey=101cc284a7074779856ab37fb68fa7a5"
              className="aspect-[3.33] w-[63px]"
              alt=""
            />
          </div>
        </div>
        <h3 className="mt-6 text-xl font-light text-amber-50">
          ĐĂNG KÝ ĐỂ NHẬN NHIỀU ƯU ĐÃI
        </h3>
        <form className="flex gap-3 mt-4 text-center">
          <label htmlFor="emailInput" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="emailInput"
            placeholder="Email Address"
            aria-label="Enter your email"
            className="grow justify-center items-center px-16 py-3.5 text-xs font-light bg-amber-50 text-slate-500 w-fit max-md:px-5"
          />
          <button className="justify-center px-5 py-3 text-sm font-semibold text-amber-50 bg-orange-300">
            ĐĂNG KÝ
          </button>
        </form>
        <div className="flex gap-5 mt-5 text-sm text-amber-50">
          <span className="grow">HOTLINE: 1900 1716</span>
          <span className="flex-auto">EMAIL: support@piorneercraft.com</span>
        </div>
        <div className="flex gap-3.5 self-start mt-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d52a0df2d0288a95cdc4e4b3732c1f52b9444d6adea7719b424edd692268fd?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            className="shrink-0 aspect-[0.55] w-[11px]"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f95c8be7dad46b7594fb2f4e0168945363d8ade838b0068f591d8cdb8639b5?apiKey=101cc284a7074779856ab37fb68fa7a5&"
            className="shrink-0 w-5 aspect-square"
            alt=""
          />
        </div>
      </section>

      <Layout>
        <nav className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
            <h4 className="flex flex-col grow text-sm font-light text-amber-50 max-md:mt-10">
              <span className="text-xl font-medium">Trợ giúp</span>
              <a href="#" className="mt-5">
                Dịch vụ Khách hàng
              </a>
              <a href="#" className="mt-3.5">
                Tài khoản của tôi
              </a>
              <a href="#" className="mt-4">
                Các điều khoản và điều kiện
              </a>
              <a href="#" className="mt-3.5">
                Pháp lý & Bảo mật
              </a>
              <a href="#" className="mt-3.5">
                Liên hệ
              </a>
            </h4>
          </aside>
          <aside className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
            <h4 className="flex flex-col text-sm font-light text-amber-50 max-md:mt-10">
              <span className="text-xl font-medium">Mua sắm</span>
              <a href="#" className="mt-6">
                Giao hàng
              </a>
              <a href="#" className="mt-3.5">
                Thanh toán
              </a>
              <a href="#" className="mt-4">
                Trả hàng
              </a>
            </h4>
          </aside>
          <section className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <h4 className="flex flex-col text-amber-50 max-md:mt-10">
              <span className="text-xl font-medium">Về chúng tôi</span>
              <a href="/AboutUs" className="mt-5 text-sm font-light">
                Giới thiệu
              </a>
            </h4>
          </section>
        </nav>
      </Layout>
    </div>
  </footer>
);

export default Footer;

// const Layout = ({ children }) => (
//     <div className="flex flex-col">{children}</div>
//   );

//   const Footer = () => (
//     <footer className="flex justify-center items-center px-16 py-20 mt-28 w-full bg-[#547B80] max-md:px-5 max-md:mt-10 max-md:max-w-full">
//       <div className="flex gap-5 mb-3 w-full max-w-[1117px] max-md:flex-wrap max-md:max-w-full">
//         <section className="flex flex-col">
//           {/*... */}
//         </section>

//         <Layout>
//           <nav className="flex gap-5 max-md:flex-col max-md:gap-0">
//             {/*... */}
//           </nav>
//         </Layout>
//       </div>
//     </footer>
//   );

//   export default Footer;
