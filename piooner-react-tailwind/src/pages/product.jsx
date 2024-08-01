import * as React from "react";
import { img } from "../utils/assets";
import "/src/utils/product.css";

const ProductCard = ({ product, addToCart }) => (
  <article className="flex flex-col grow max-md:mt-8">
    <div className="flex flex-col pt-3 w-full rounded bg-neutral-100 justify-center items-center self-center">
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <div className="w-full flex z-10 flex-col justify-center items-center self-center mt-0 max-w-full w-[179px] max-md:pr-5">
            <img
              loading="lazy"
              src={img[`${product.image}`]}
              alt={product.name}
              className="aspect-[0.95] w-[375px] justify-center self-start items-center"
            />
          </div>
        </div>
        <div className="flex justify-center items-center self-start" />
      </div>
    </div>
    <div className="flex flex-col mt-4 leading-[150%]">
      <h2 className="text-xl leading-7 text-black">{product.name}</h2>
      <p className="gap-3 mt-2 text-base font-medium text-red-500 whitespace-nowrap">
        {product.price.toLocaleString()} VND
      </p>
    </div>
    <button
      className="flex flex-col justify-center px-12 py-2.5 mt-3.5 w-full text-base leading-3 text-white bg-black rounded-none max-md:px-5"
      onClick={() => addToCart(product)}
    >
      <div className="flex gap-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1c7b4c5b8a14be22a3ab2dcaf00ea2a28efa02e58b408afde256eec3ce6cfd?apiKey=101cc284a7074779856ab37fb68fa7a5&"
          alt=""
          className="shrink-0 w-6 aspect-square"
        />
        <span className="my-auto">Thêm vào giỏ hàng</span>
      </div>
    </button>
  </article>
);

const ProductRow = ({ products, addToCart }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {products.map((product) => (
        <div key={product.id} className="col-span-1">
          <ProductCard product={product} addToCart={addToCart} />
        </div>
      ))}
    </section>
  );
};

const ProductPage = () => {
  const products = [
    { id: 1, name: "Bình gốm cơ bản loại 1 (nhỏ)", price: 59000, image: "product8" },
    { id: 2, name: "Bình gốm cơ bản loại 1 (lớn)", price: 89000, image: "product8" },
    { id: 3, name: "Bình gốm sữa", price: 99000, image: "product2" },
    { id: 4, name: "Bình gốm làm mát", price: 149000, image: "product10" },
    { id: 5, name: "Bình gốm hình cầu tròn (loại 1)", price: 99000, image: "product11" },
    { id: 6, name: "Bình gốm hình cầu tròn (loại 2)", price: 119000, image: "product3" },
    { id: 7, name: "Bình gốm ½ C", price: 59000, image: "product12" },
    { id: 8, name: "Bình gốm 2 lỗ", price: 89000, image: "product14" },
    { id: 9, name: "Bình gốm cách điệu dạng cắt", price: 69000, image: "product21" },
    { id: 10, name: "Bình gốm cách điệu dạng tròn", price: 79000, image: "product19" },
    { id: 11, name: "Bình gốm chữ cái", price: 79000, image: "product15" },
    { id: 12, name: "Bình gốm dạng can sữa", price: 99000, image: "product22" },
    { id: 13, name: "Bình gốm cắm hoa để bàn", price: 69000, image: "product24" },
    { id: 14, name: "Bình gốm giả nung", price: 149000, image: "product4" },
    { id: 15, name: "Bình gốm giả gạch", price: 199000, image: "product5" },
  ];

  const addToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imgUrl: img[`${product.image}`],
        quantity: 1,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("localStorage cartItems", localStorage.getItem("cartItems"));
  };

  return (
    <div className="w-full mt-20">
      <main className="main-content w-full">
        <div className="community-section w-full">
          <div className="images-list justify-center w-full">
            <ProductRow products={products} addToCart={addToCart} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
