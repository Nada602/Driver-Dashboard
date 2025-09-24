import { AlertCircle, CircleCheck, Route, Users,BarChart3 } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../context/dataContext";


function OverView() {
    const {roads,drivers,stats}=useContext(AppContext)
 
    return (
      <>
        <div className="container">
          <div className="d-flex justify-content-between">
          <h2 className="h4   text-dark d-flex align-items-center gap-2 m-4">
            <div
              className="d-flex align-items-center justify-content-center  bg-opacity-10 rounded"
              style={{
                width: "32px",
                height: "32px",
               background:"linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)"
              }}
            >
              <BarChart3 size={18} className="text-blue" />
            </div>
            Overview
          </h2>
        
          </div>
          <div className="row container m-3 my-5  ">
            <div className="col-lg-2 border m-2 p-4">
              <h5 className="text-secondary">Total Drivers</h5>
              <h2 className="fw-bold d-flex flex-row text-primary">
                {stats.totalDrivers}{" "}
                <div
                  className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded ms-auto"
                  style={{ width: "32px", height: "32px" }}
                >
                  <Users size={20} />
                </div>
              </h2>
            </div>
            <div className="col-lg-2 border m-2 p-4">
              <h5 className="text-secondary">Total Roads</h5>
              <h2 className="fw-bold d-flex flex-row text-success">
                {stats.totalRoutes}{" "}
                <div
                  className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded ms-auto"
                  style={{ width: "32px", height: "32px" }}
                >
                  <Route size={20} />
                </div>
              </h2>
            </div>


            <div className="col-lg-2 border m-2 p-4">
              <h5 className="text-secondary">Priority</h5>
              <h2 className="fw-bold d-flex flex-row text-danger">
                {stats.highPriorityRoutes}{" "}
                <div
                  className="d-flex align-items-center justify-content-center  rounded ms-auto"
                  style={{ width: "32px", height: "32px" }}
                >
                  <AlertCircle color="red" size={20} />
                </div>
              </h2>
            </div>

            <div className="col-lg-2 border m-2 p-4">
              <h5 className="text-secondary">Assigned Roads</h5>
              <h2 className="fw-bold d-flex flex-row text-success ">
                {stats.assignedRoutes}{" "}
                <div
                  className="d-flex align-items-center justify-content-center  rounded ms-auto"
                  style={{ width: "32px", height: "32px" }}
                >
                  <CircleCheck className="text-success" size={20} />
                </div>
              </h2>
            </div>
            <div className="col-lg-2 border mx-2 p-4">
              <h5 className="text-secondary">Efficiency</h5>
              <h2 style={{color:"purple"}} className="fw-bold d-flex flex-row">
                80%
                <div
                  className="d-flex align-items-center justify-content-center  rounded ms-auto"
                  style={{ width: "32px", height: "32px" }}
                >
                  <BarChart3 size={20} />
                </div>
              </h2>
            </div>
          </div>
        </div>
      </>
    );
}

export default OverView;