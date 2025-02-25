import "./FrontPage1Right.css";
import { Link } from "react-router-dom";
function FrontPage1Right() {
  return (
    <div className="right-half">
      <Link to="/Customer/Customer">
        <button id="cust-space" className="btn">
          Make Your List
        </button>
      </Link>
    </div>
  );
}
export default FrontPage1Right;
