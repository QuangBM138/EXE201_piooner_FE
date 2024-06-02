import { Links, img } from "../utils/assets";

function CommunityPage() {
  return (
    <div className="flex flex-col items-center pt-20 bg-white">
      <section className="mt-16 text-6xl font-extrabold text-center text-stone-600 max-md:mt-10 max-md:text-4xl">
        Cộng đồng
      </section>
      <section className="flex gap-5 justify-between items-center px-5 mt-28 w-full max-w-screen-xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-center self-stretch max-md:max-w-full">
          <article className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-stone-600 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center max-md:max-w-full">
                    <h2 className="text-4xl font-semibold max-md:max-w-full">
                      Làng Gốm Lái Thiêu
                    </h2>
                    <p className="mt-6 text-2xl max-md:max-w-full">
                      Nói đến gốm xứ miền Nam không thể không nói đến gốm Lái
                      Thiêu. Làng gốm nổi tiếng với những sản phẩm gốm tinh tế,
                      đậm chất Nam Bộ lại mang tính ứng dụng cao nằm tại tỉnh
                      Bình Dương.
                    </p>
                  </div>
                  <div className="flex flex-col mt-6 text-xl max-md:max-w-full">
                    <a
                      href={Links.gomlathieu}
                      className="mx-auto px-16 py-6 rounded-3xl border border-solid border-stone-600 max-md:px-5 max-md:max-w-full"
                      target="_blank"
                    >
                      Tìm hiểu thêm
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center shadow-sm max-md:mt-10">
                  <img
                    loading="lazy"
                    src={img.community}
                    alt="Lái Thiêu Pottery"
                    className="w-full aspect-[0.95]"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default CommunityPage;
