function AccountInfo() {
  return (
    <div className="flex flex-col font-medium max-md:mt-10">
      <div className="text-xl text-neutral-900">THÔNG TIN TÀI KHOẢN</div>
      <div className="shrink-0 mt-6 h-px bg-black border border-black border-solid" />
      <div className="mt-6 text-4xl text-black">LÊ MẠNH</div>
    </div>
  );
}

function TrackingOptions() {
  return (
    <div className="flex flex-col grow mt-16 text-xl font-medium text-neutral-900 max-md:mt-10">
      <div>THEO DÕI ĐƠN</div>
      <div className="mt-6">ĐƠN HÀNG GẦN NHẤT</div>
      <div className="mt-6">ĐĂNG XUẤT</div>
    </div>
  );
}

function ProfilePage() {
  return (
    <main className="flex flex-col items-center pt-20 bg-white">
      <div className="shrink-0 mt-28 max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 w-[1225px] max-md:mt-10" />
      <div className="mt-6 text-3xl font-bold text-neutral-900">
        Tài khoản của bạn
      </div>
      <div className="shrink-0 mt-5 max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 w-[1225px]" />

      <section className="mt-20 w-full max-w-[1005px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
            <div className="flex grow justify-center items-center px-16 py-16 w-full bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9378c8d903d546dd5b294af9dbf7c6d8fd46bac0f6bc7f7a2dddf1f58cd59f8?apiKey=101cc284a7074779856ab37fb68fa7a5&"
                alt=""
                className="aspect-[0.71] fill-yellow-600 w-[130px]"
              />
            </div>
          </aside>

          <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <AccountInfo />
                  <TrackingOptions />
                </div>
              </div>
              <div className="mt-14 text-base font-medium text-neutral-900 max-md:mt-10 max-md:max-w-full">
                lemanh@gmail.com <br />
                Vinhomes Grand Park, Q9, HCMC
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full" />
    </main>
  );
}

export default ProfilePage;
