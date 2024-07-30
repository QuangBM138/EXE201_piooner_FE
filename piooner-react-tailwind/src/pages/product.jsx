import * as React from "react";
import { img } from "../utils/assets";
import "/src/utils/product.css";

const ProductCard = ({ product, addToCart }) => (
  <article className="flex flex-col grow max-md:mt-8">
    <div className="flex flex-col pt-3 w-full rounded bg-neutral-100 justify-center items-center self-center">
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <div className=" w-full flex z-10 flex-col justify-center items-center self-center mt-0 max-w-full w-[179px] max-md:pr-5">
            <img
              loading="lazy"
              src={img[`${product.image + product.id}`]}
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
  const rows = [];
  const itemsPerRow = products.length / 3;

  for (let i = 0; i < products.length; i += itemsPerRow) {
    const rowProducts = products.slice(i, i + itemsPerRow);
    rows.push(
      <div key={i} className="flex flex-col gap-10 md:col-span-1">
        {rowProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">{rows}</section>
  );
};

const ProductPage = () => {
  const products = [
    { id: 1, name: "Bình gốm đen", price: 200000, image: "product" },
    { id: 2, name: "Bình gốm sữa", price: 250000, image: "product" },
    { id: 3, name: "Bình gốm bầu lớn", price: 140000, image: "product" },
    { id: 4, name: "Bình gốm giả nung", price: 300000, image: "product" },
    { id: 5, name: "Bình gốm giả gạch", price: 120000, image: "product" },
    { id: 6, name: "Bình gốm trang trí", price: 180000, image: "product" },
    { id: 7, name: "Bình gốm cơ bản 1", price: 100000, image: "product" },
    { id: 8, name: "Bình gốm cơ bản loại 2", price: 100000, image: "product" },
    { id: 9, name: "Bình gốm bầu", price: 59000, image: "product" },
    { id: 10, name: "Bình gốm làm mát", price: 200000, image: "product" },
    {
      id: 11,
      name: "Bình gốm cầu tròn đơn sắc",
      price: 150000,
      image: "product",
    },
    { id: 12, name: "Bình gốm Tonardo", price: 50000, image: "product" },
    { id: 13, name: "Bình gốm Phình", price: 50000, image: "product" },
    { id: 14, name: "Bình gốm hai lỗ", price: 75000, image: "product" },
    { id: 15, name: "Bình gốm tam giác", price: 30000, image: "product" },
    { id: 16, name: "Bình gốm chữ B", price: 60000, image: "product" },
    { id: 17, name: "Bình gốm bầu", price: 28000, image: "product" },
    { id: 18, name: "Bình gốm 1/2 C", price: 30000, image: "product" },
    { id: 19, name: "Bình gốm bầu đục", price: 33000, image: "product" },
    { id: 20, name: "Bình gốm cơ bản", price: 20000, image: "product" },
    { id: 21, name: "Bình gốm cách điệu", price: 99000, image: "product" },
    { id: 22, name: "Bình gốm ấm nước", price: 45000, image: "product" },
    { id: 23, name: "Bình gốm đen tuyền", price: 30000, image: "product" },
    { id: 24, name: "Bình gốm ", price: 36000, image: "product" },
    

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
        imgUrl: img[`${product.image + product.id}`],
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
