import {
  Route,
  MapPin,
  Clock,
  Users,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useContext,useState } from "react";
import { AppContext } from "../../context/dataContext";
import RoadForm from "../../form/RoadForm"

import SearchLogic from "../Search/SearchLogic";

function RoadsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const[filteredResult,setFilterResult]=useState()
   const { roads, drivers, deleteRoad ,setRoads} = useContext(AppContext);
   const [showForm, setShowForm] = useState(false);
   const priorityColor = {
     high: "bg-success bg-opacity-10 text-success border border-success", // أخضر فاتح
     low: "bg-danger bg-opacity-10 text-danger border border-danger", // أحمر فاتح
     medium: "bg-secondary bg-opacity-10 text-secondary border border-secondary", // رمادي فاتح
   };
   
   const getDriverName = (driverId) => {
  const driver = drivers.find((d) => d.id === driverId);
  return driver ? driver.name : "Unassigned";
};
const assignDriver = (roadId, driverId) => {
  setRoads(
    roads.map((road) =>
      road.id === roadId
        ? { ...road, assignedDriverId: parseInt(driverId) }
        : road
    )
  );
};
function hanleFilterResult(d){
  setFilterResult(d)
}
const filteredData = roads.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
 const matchesPriority =
   !filteredResult || filteredResult === "all"
     ? true
     : item.priority.toLowerCase() === filteredResult.toLowerCase();

  return matchesSearch && matchesPriority;
});



    return (
      <>
        <div className="container d-flex flex-column my-5">
          <div className="d-flex  mb-5 m-4  ">
            <h2 className="h5 fw-semibold text-dark d-flex  align-items-center gap-2">
              <div
                className="d-flex align-items-center justify-content-center  bg-opacity-10 rounded"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "lightgreen",
                }}
              >
                <Route size={18} className="text-white" />
              </div>
              Roads
            </h2>
            <div className="d-flex  ms-auto  align-items-center">
              <div className="mx-3">
                <SearchLogic
                  setSearchTerm={setSearchTerm}
                  setFilterResult={hanleFilterResult}
                />
              </div>
              <button
                className="btn btn-primary ms-auto mx-2 "
                onClick={() => {
                  setShowForm(!showForm);
                }}
              >
                Add Road +
              </button>
            </div>
          </div>
          {/* form */}
          {showForm && <RoadForm setShowForm={setShowForm} />}
          {/* all  roads */}
          <div className="  rounded ">
            {filteredData.map((d) => (
              <div
                className=" my-4 m-auto p-4 bg-light  rounded border border-light d-flex flex-column"
                key={d.id}
                style={{ marginBottom: "10px" }}
              >
                <div className="d-flex flex-row">
                  <h4 className=" d-flex flex-row   ">
                    {d.name}{" "}
                    <div>
                      <span
                        className={`me-auto badge rounded-pill mx-3 px-3 py-1   ${
                          priorityColor[d.priority] || "bg-black"
                        }`}
                        style={{ fontSize: "13px" }}
                      >
                        {d.priority.toUpperCase()}
                      </span>
                    </div>
                  </h4>
                  <div className="d-flex flex-column ms-auto">
                    {d.assignedDriverId ? (
                      <div className="d-flex align-items-center text-success mb-2">
                        <CheckCircle size={16} className="me-2" />
                        <div>
                          <div className="small fw-semibold">Assigned</div>
                          <div className="text-muted small">
                            {getDriverName(d.assignedDriverId)}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center text-warning mb-2">
                        <AlertCircle size={16} className="me-2" />
                        <span className="small fw-semibold">Unassigned</span>
                      </div>
                    )}

                    <select
                      value={d.assignedDriverId || ""}
                      onChange={(e) => assignDriver(d.id, e.target.value)}
                      className=" form-select-sm ms-auto"
                    >
                      <option value="">Select Driver</option>
                      {drivers
                        .filter((driver) => driver.available)
                        .map((driver) => (
                          <option key={driver.id} value={driver.id}>
                            {driver.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-row  align-items-center">
                  <MapPin size={20} className="" />
                  <p className="fw-light m-3">
                    {" "}
                    <span className="fw-bolder"> from:</span> {d.startLocation}{" "}
                    <span className="fw-bolder"> To:</span> {d.endLocation}
                  </p>
                  <Clock size={20} />
                  <p className="fw-light m-3">
                    {d.time}
                    <span className="fw-bold mx-1">.</span>
                    {d.duration}
                  </p>
                  <Users size={20} />
                  <p className="fw-light m-3">{d.passengers} passengers</p>
                </div>

                <div className="d-flex ">
                  <button
                    className="m-2 btn btn-danger ms-auto"
                    onClick={() => deleteRoad(d.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default RoadsList;