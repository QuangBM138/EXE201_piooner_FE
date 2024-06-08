import '/src/utils/product.css';
import Popup from 'reactjs-popup';
import  '/src/utils/popup.css';


const ProductPage = () => {
  return (
    <div className="container">
      <main className="main-content">
        <div className="community-section">
          <div className="images-list">
          <Popup trigger=
                {<div className='HinhAnh'>
              <img src="src/assets/image/binh1.jpg" alt="Image 1" />
              
            </div>}
                position="right center">
                <div id="myModal" className="modal">
  {/* Modal content */}
  <div className="modal-content">
    <span className="close">×</span>
    <p>xyz abc</p>
  </div>
</div>
            </Popup>
            
            <div className='HinhAnh'>
              <img src="src/assets/image/binh2.jpg" alt="Image 2" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh3.jpg" alt="Image 3" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh4.jpg" alt="Image 4" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh5.jpg" alt="Image 5" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh6.jpg" alt="Image 6" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh7.jpg" alt="Image 7" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh8.jpg" alt="Image 8" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh9.jpg" alt="Image 9" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh10.jpg" alt="Image 10" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh11.jpg" alt="Image 11" />
              
            </div>
            <div className='HinhAnh'>
              <img src="src/assets/image/binh12.jpg" alt="Image 12" />
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
