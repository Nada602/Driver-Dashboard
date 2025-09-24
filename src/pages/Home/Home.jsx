import Header from "../../comman/Header/Header";
import Roads from "../Roads/Roads";
import Drivers from "../Drivers/Drivers"
import DriversList from "../../components/DriverList/DriversList";
import RoadsList from "../../components/RoadsList/RoadsList";
import OverView from "../../components/overview/Overview";
function Home() {
    return (  <>
  <div className="container">
    <OverView/>
    
    <RoadsList className="mb-5"/>
    <DriversList />
  </div>
    </>);
}

export default Home;