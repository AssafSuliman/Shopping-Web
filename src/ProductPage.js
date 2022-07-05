import Header from './Header.js'
import Footer from './Footer.js'
function ProductPage () {
    return (
    <div>
    <Header></Header>
    <main>
      <div className="container">
        <div className="row">
          <div className="col1 col-lg-5 col-sm-12">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="false" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="ProductPageImgs/impact-driver.jpg" className="d-block w-100" alt="impact driver and drill"></img>
                </div>
                <div className="carousel-item">
                  <img src="ProductPageImgs/drill.jpg" className="d-block w-100" alt="drill"></img>
                </div>
                <div className="carousel-item">
                  <img src="ProductPageImgs/impact-driver2.jpg" className="d-block w-100" alt="impact-driver"></img>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
              <p><span>★★★★</span> 518 ratings</p>
            </div>
            <div className="col2 col-lg-5 col-sm-12">
              <h5 className="card-title">DEWALT 20V MAX* XR Cordless Drill Combo Kit, Brushless, 5.0-Ah, 2-Tool (DCK299P2)</h5>
              <div className="line"></div>
              <h6>Description:</h6>
              <p className="card-text">DCD996 20V MAX 1/2-inch hammerdrill 0-38,250 BPM in the cordless tools combo kit is made for fast drilling in masonry materials
                DCD996 20V MAX 1/2-inch hammerdrill in the drill/impact driver combo kit has a compact size (8.4 inch front-to-back length) and lightweight (4.7 lbs) design to fit tight areas
                DCD996 20V MAX hammerdrill includes 3-Mode LED providing lighting in dark or confined spaces up to 20 times brighter than previous model
                DCF887 20V MAX 1/4-inch impact driver provides 1,825 in-lbs of max torque at fast 0-3,250 RPM speed and 0-3,600 impacts per minute
                DCF887 20V MAX 1/4-inch impact driver has a compact size (5.3-inch front-to-back length) and lightweight (3.4 lbs) design</p>
              <p className="card-text"><small className="text-muted">cannot be shipped</small></p>
              <div className="line"></div>
              <h5>Price: 530₪</h5>
              <button type="button" className="btn btn-primary">Buy now!</button>
              <button type="button" className="btn btn-info">Add to cart</button>
            </div>
          </div>
      </div>
    </main>
    <Footer></Footer>
    </div>
    )}

export default ProductPage