function AccountInfo({ userData }) {
  return (
    <div className="flex flex-col font-medium max-md:mt-10">
      <div className="text-xl text-neutral-900">THÔNG TIN TÀI KHOẢN</div>
      <div className="shrink-0 mt-6 h-px bg-black border border-black border-solid" />
      <div className="mt-6 text-4xl text-black">{userData.name}</div>
      <div className="mt-2 text-base text-neutral-900">{userData.email}</div>
      <div className="mt-2 text-base text-neutral-900">{userData.address}</div>
      <div className="mt-2 text-base text-neutral-900">
        Điện thoại: {userData.phoneNumber}
      </div>
    </div>
  );
}

export default AccountInfo;
