import { CarFront, Route, House,Settings } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <>
        <div
          className="d-flex shadow-lg rounded ml-3 flex-column  text-dark p-3"
          style={{
            position: "fixed",
            top: "200px",
            left: "20px",
            height: "40vh",
            width: "50px",
            backgroundColor: "white",
             background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <Link to="/" className="text-white mb-2">
            <House  />
          </Link>
          <Link to="/drivers" className="text-white mb-2">
            <CarFront />
          </Link>
          <Link to="/roads" className="text-white mb-2">
            <Route />
          </Link>
          <Link to="/setting" className="text-white mt-auto ">
            <Settings />
          </Link>
        </div>
      </>
    );
}

export default Sidebar;

