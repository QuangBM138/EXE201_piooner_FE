import "/src/utils/product.css";
import Popup from "reactjs-popup";
import "/src/utils/popup.css";
import { img } from "../utils/assets";

const ProductPage = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="community-section">
          <div className="images-list">
            <Popup
              trigger={
                <div className="HinhAnh">
                  <img src={img.product1} alt="Image 1" />
                </div>
              }
              position="right center"
            >
              <div id="myModal" className="modal">
                {/* Modal content */}
                <div className="modal-content">
                  <span className="close">×</span>
                  <p>xyz abc</p>
                </div>
              </div>
            </Popup>

            <div className="HinhAnh">
              <img src={img.product2} alt="Image 2" />
            </div>
            <div className="HinhAnh">
              <img src={img.product3} alt="Image 3" />
            </div>
            <div className="HinhAnh">
              <img src={img.product4} alt="Image 4" />
            </div>
            <div className="HinhAnh">
              <img src={img.product5} alt="Image 5" />
            </div>
            <div className="HinhAnh">
              <img src={img.product6} alt="Image 6" />
            </div>
            <div className="HinhAnh">
              <img src={img.product7} alt="Image 7" />
            </div>
            <div className="HinhAnh">
              <img src={img.product8} alt="Image 8" />
            </div>
            <div className="HinhAnh">
              <img src={img.product9} alt="Image 9" />
            </div>
            <div className="HinhAnh">
              <img src={img.product10} alt="Image 10" />
            </div>
            <div className="HinhAnh">
              <img src={img.product11} alt="Image 11" />
            </div>
            <div className="HinhAnh">
              <img src={img.product12} alt="Image 12" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
