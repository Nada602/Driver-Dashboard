import Header from "./comman/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./comman/Header/sidebar/Sidebar";
function Index() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Header />
          <Outlet /> {/* هنا الصفحات هتتبدل */}
        </div>
      </div>
    </>
  );
}

export default Index;
