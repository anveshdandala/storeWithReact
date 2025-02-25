import pizzaImage from "../../../assets/Pizza All You Can Fridays!.png";
import snacks from "../../../assets/snacks.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import skincare from "../../../assets/skincare.png";
import "../pages/Customer.css";
function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={snacks} className="d-block w-100" id="adds" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pizzaImage} className="d-block w-100" id="adds" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={skincare} className="d-block w-100" id="adds" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
