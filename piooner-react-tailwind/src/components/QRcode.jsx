const QRCodeModal = ({ totalprice, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="flex flex-col items-center px-10 py-12 bg-white rounded-lg">
        <h2 className="text-xl font-bold text-center">
          Thanh toán bằng QRCode MoMo
        </h2>
        <img src={img.qrMomo} alt="QR Code" className="w-48 h-48 mt-5" />
        <p className="mt-5 text-center">
          Quét mã QR bằng ứng dụng MoMo của bạn để hoàn tất thanh toán.
          <br />
          Theo cú pháp: "mã đơn hàng" - "số điện thoại"
          <br />
          VD: "" - "09XXXXXXXX"
          <br />
          Số tiền:
          <span className="font-bold">{totalprice.toLocaleString()}</span>
        </p>
        <button
          type="button"
          className="mt-10 px-10 py-3 text-white bg-blue-500 rounded-lg"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default QRCodeModal;
