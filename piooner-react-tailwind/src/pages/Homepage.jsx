function HomePage() {
  return (
    <div>
      <main className="self-center mt-12 w-full max-w-[1276px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-96 max-md:mt-10">
              <h3 className="text-xl font-medium text-black">Sáng tạo</h3>
              <h4 className="text-xl font-medium text-black">Đồ Gốm</h4>
              <h2 className="mt-2 text-2xl text-black">Theo cách của bạn</h2>
              <button className="justify-center px-11 py-4 mt-4 text-xl text-center rounded-3xl border border-solid border-stone-600 text-stone-600 max-md:px-5 max-md:mt-10">
                Sáng tạo ngay
              </button>
            </div>
          </aside>
          <figure className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3de14e10fbd69d714c2495317088eca9f2686d932d39f557d8beb8bcdc8cabf1?apiKey=101cc284a7074779856ab37fb68fa7a5&"
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
