import Header from "./comman/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./comman/sidebar/Sidebar";
function Index() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <Outlet /> 
        </div>
      </div>
    </>
  );
}

export default Index;
