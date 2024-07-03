function ImageWithDescription({ src, alt, onClick }) {
  return (
    <div className="flex gap-4 mt-14 ml-4 max-md:mt-10 max-md:ml-2.5">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 aspect-square w-[35px] cursor-pointer"
        onClick={onClick}
      />
      <div className="flex-auto my-auto">
        <span>Giỏ hàng/ </span>
        <span className="text-amber-700">Thanh toán</span>
      </div>
    </div>
  );
}
export default ImageWithDescription;
