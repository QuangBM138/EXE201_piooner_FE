import { img } from "../utils/assets";

function AboutUs() {
  return (
    <main className="mt-14 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
          <header className="flex flex-col grow max-md:max-w-full ">
            <h1 className=" self-end mr-14 text-6xl font-extrabold text-center leading-[60px] text-stone-600 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
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
                  src={img.arbutus01}
                  alt="Pioneer Craft example"
                  className="grow w-full aspect-[0.88] rounded-[250px_250px_0px_0px] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full ">
                <p className="flex flex-col text-base max-md:max-w-full border border-gray-300 p-5 rounded-lg shadow-md ">
                  Pioneer Craft là sự kết hợp đầy sáng tạo của một nhóm bạn trẻ
                  yêu thích nghệ thuật và sáng tạo. Chúng tôi tin rằng mỗi sản
                  phẩm gốm mang trong mình một câu chuyện độc đáo và tinh thần
                  sáng tạo. Với trải nghiệm mua sắm trực tuyến tương tác, chúng
                  tôi mang đến cho khách hàng những sản phẩm gốm chất lượng cao
                  và trải nghiệm mua sắm đáng nhớ.
                </p>
                <section className="flex flex-col pl-20 mt-16 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <p className="ml-3.5 w-[401px] max-md:max-w-full border border-gray-300 p-5 rounded-lg shadow-md">
                    Tại Pioneer Craft, chúng tôi không chỉ bán các sản phẩm gốm
                    chất lượng cao mà còn mang lại trải nghiệm mua sắm trực
                    tuyến đáng nhớ. Với một sự kết hợp tinh tế giữa truyền thống
                    và hiện đại, chúng tôi tạo ra những sản phẩmốm độc đáo với
                    sự kết hợp giữa nghệ thuật thủ công và công nghệ hiện đại.
                  </p>
                  <p className="self-end mt-16 w-[393px] max-md:mt-10 border border-gray-300 p-5 rounded-lg shadow-md">
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
            src={img.arbutus02}
            alt="Decorative Image"
            className="shrink-0 mt-28 max-w-full aspect-[0.71] w-[900px] max-md:mt-10"
          />
        </aside>
      </div>
    </main>
  );
}

export default AboutUs;
