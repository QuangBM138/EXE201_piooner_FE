import { useEffect, useState } from "react";
import TrackingOptions from "../components/trackingOptions";
import AccountInfo from "../components/AccountInfo.jsx";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const existingUserData = JSON.parse(localStorage.getItem("userData"));
    if (existingUserData) {
      setUserData(existingUserData);
    }
    setLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }

  return (
    <main className="flex flex-col items-center pt-20 bg-white">
      <div className="shrink-0 mt-28 max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 w-[1225px] max-md:mt-10" />
      <div className="mt-6 text-3xl font-bold text-neutral-900">
        Tài khoản của bạn
      </div>
      <div className="shrink-0 mt-5 max-w-full h-px border border-solid bg-neutral-900 border-neutral-900 w-[1225px]" />
      <div className="w-[60%] max-w-full flex mt-20 max-md:max-w-full">
        <section className="w-full max-w-full max-md:mt-10 max-md:max-w-full">
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
                  <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                    <AccountInfo userData={userData} />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <TrackingOptions email={userData.email} />
      </div>
    </main>
  );
}

export default ProfilePage;
