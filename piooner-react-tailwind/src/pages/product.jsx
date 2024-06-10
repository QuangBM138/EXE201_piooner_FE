import '/src/utils/product.css';
// import Popup from 'reactjs-popup';
import  '/src/utils/popup.css';


const ProductPage = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="community-section">
          <div className="images-list">
            {/* <Popup
              trigger={
                <div className="HinhAnh">
                  <img src="src/assets/image/binh1.jpg" alt="Image 1" />
                </div>
              }
              position="right center"
            >
              <div id="myModal" className="modal">
                {/* Modal content */}
                {/* <div className="modal-content">
                  <span className="close">×</span>
                  <p>xyz abc</p>
                </div>
              </div>
            </Popup>  */}
            <div className="HinhAnh">
                <img src="src/assets/image/binh1.jpg" alt="Image 2" />
                <div className='detail'>
                <h1>bình gốm đen</h1>
                <h2>30.000 VND</h2>
                <button>Mua hàng</button>
                </div>
              </div>
              
            
              <div className="HinhAnh">
                <img src="src/assets/image/binh2.jpg" alt="Image 2" />
                <h1>bình gốm sữa</h1>
                <h2>30.000 VND</h2>
              </div>
              
            <div className="HinhAnh">
              <img src="src/assets/image/binh3.jpg" alt="Image 3" />
              <h1>bình gốm bầu lớn</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh4.jpg" alt="Image 4" />
              <h1>bình gốm giả nung</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh5.jpg" alt="Image 5" />
              <h1>bình gốm giả gạch</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh6.jpg" alt="Image 6" />
              <h1>bình gốm trang trí</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh7.jpg" alt="Image 7" />
              <h1>bình gốm cơ bản 1</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh8.jpg" alt="Image 8" />
              <h1>bình gốm cơ bản loại 2</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh9.jpg" alt="Image 9" />
              <h1>bình gốm bầu</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh10.jpg" alt="Image 10" />
              <h1>Bình gốm làm mát </h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh11.jpg" alt="Image 11" />
              <h1>bình gốm cầu tròn đơn sắc</h1>
                <h2>30.000 VND</h2>
            </div>
            <div className="HinhAnh">
              <img src="src/assets/image/binh12.jpg" alt="Image 12" />
              <h1>bình gốm tròn rỗng</h1>
                <h2>30.000 VND</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
