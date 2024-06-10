import { img } from "../utils/assets";
import "/src/utils/product.css";

const image = "product";

const products = [
  { id: 1, name: "Bình gốm đen", price: 200000, image: image },
  { id: 2, name: "Bình gốm sữa", price: 250000, image: image },
  { id: 3, name: "Bình gốm bầu lớn", price: 400000, image: image },
  { id: 4, name: "Bình gốm giả nung", price: 150000, image: image },
  { id: 5, name: "Bình gốm giả gạch", price: 120000, image: image },
  { id: 6, name: "Bình gốm trang trí", price: 180000, image: image },
  { id: 7, name: "Bình gốm cơ bản 1", price: 100000, image: image },
  { id: 8, name: "Bình gốm cơ bản loại 2", price: 120000, image: image },
  { id: 9, name: "Bình gốm bầu", price: 300000, image: image },
  { id: 10, name: "Bình gốm làm mát", price: 200000, image: image },
  { id: 11, name: "Bình gốm cầu tròn đơn sắc", price: 150000, image: image },
  { id: 12, name: "Bình gốm tròn rỗng", price: 100000, image: image },
];

// const localProducts = [
//   { id: 1, name: "bình gốm đen", price: 30000, image: "binh1.jpg" },
//   { id: 2, name: "bình gốm sữa", price: 30000, image: "binh2.jpg" },
//   { id: 3, name: "bình gốm bầu lớn", price: 30000, image: "binh3.jpg" },
//   { id: 4, name: "bình gốm giả nung", price: 30000, image: "binh4.jpg" },
//   { id: 5, name: "bình gốm giả gạch", price: 30000, image: "binh5.jpg" },
//   { id: 6, name: "bình gốm trang trí", price: 30000, image: "binh6.jpg" },
//   { id: 7, name: "bình gốm cơ bản 1", price: 30000, image: "binh7.jpg" },
//   { id: 8, name: "bình gốm cơ bản loại 2", price: 30000, image: "binh8.jpg" },
//   { id: 9, name: "bình gốm bầu", price: 30000, image: "binh9.jpg" },
//   { id: 10, name: "Bình gốm làm mát", price: 30000, image: "binh10.jpg" },
//   {
//     id: 11,
//     name: "bình gốm cầu tròn đơn sắc",
//     price: 30000,
//     image: "binh11.jpg",
//   },
//   { id: 12, name: "bình gốm tròn rỗng", price: 30000, image: "binh12.jpg" },
// ];

const ProductPage = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="community-section">
          <div className="images-list">
            {products.map((product) => (
              <div className="HinhAnh" key={product.id}>
                {/* <img
                  src={`src/assets/image/${product.image}`}
                  alt={product.name}
                /> */}
                <img
                  src={img[`${product.image + product.id}`]}
                  alt={product.name}
                />
                <div className="detail">
                  <h1>{product.name}</h1>
                  <h2>{product.price.toLocaleString()} VND</h2>
                  <button className="uppercase">Thêm vào giỏ hàng</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
