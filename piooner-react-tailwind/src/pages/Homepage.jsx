import { img } from "../utils/assets";

function HomePage() {
  return (
    <div>
      <main className="self-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-60 max-md:mt-10">
              <h3 className="text-7xl font-medium text-black font-NVNMotherlandSignature text-center mb-8">
                Sáng tạo
              </h3>
              <h4 className="text-7xl font-medium text-black font-NVNMotherlandSignature text-center">
                Đồ Gốm
              </h4>
              <h2 className="mt-10 text-4xl text-black">Theo cách của bạn</h2>
              <button className="justify-center px-11 py-4 mt-4 text-xl text-center rounded-3xl border border-solid border-stone-600 text-stone-600 max-md:px-5 max-md:mt-10">
                Sáng tạo ngay
              </button>
              <button className="justify-center px-11 py-4 mt-6 text-xl text-center rounded-3xl border border-solid border-stone-600 text-stone-600 max-md:px-5 max-md:mt-10">
                Mua Hàng
              </button>
            </div>
          </aside>
          <figure className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={img.homeImg}
              className="w-full aspect-[1.59] max-md:max-w-full"
              alt="Main Image"
            />
          </figure>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
