import { Route, Settings,Bell } from "lucide-react";
import styles from "./header.module.css"
function Header() {
  return (
    <>
      <header
        style={{ placeItems: "center" }}
        className="container my-3 d-flex flex-row "
      >
        <div className={`rounded p-2  ${styles.routeIcon}`}>
          {" "}
          <Route strokeWidth={2} size={30}  color="white" />
        </div>
        <h2 className="m-3">Driver Schuleing Dashboard</h2>
        <div className="d-flex gap-3 ms-auto">
          <button className="p-2 bg-white">
            {" "}
            <Bell size={20} />
          </button>
          <button className="p-2 bg-white">
            {" "}
            <Settings size={20} />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
