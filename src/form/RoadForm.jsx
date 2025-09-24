import { useContext, useState } from "react";
import { AppContext } from "../context/dataContext";
import { MapPin } from "lucide-react";
function Form({setShowForm}) {
  const { drivers, addRoad } = useContext(AppContext);
 
  const [RoadForm, setRoadForm] = useState({
    name: "",
    code: "",
    startLocation: "",
    endLocation: "",
    assignedDriverId: 0,
    time: "",
    duration: "",
    distance: 0.0,
    priority: "",
    passengers: "",
    status: "",
  });
  return (
    <>
      
        <div className="bg-white rounded shadow-sm border p-4 mb-4">
          <h2 className="h5 fw-bold text-secondary mb-4 d-flex align-items-center gap-2">
            <div
              className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle"
              style={{ width: "40px", height: "40px" }}
            >
              <MapPin size={18} className="text-success" />
            </div>
            Add New Road
          </h2>

          <div className="row g-3 mb-3">
            <div className="col-md-6 col-lg-3">
              <input
                type="text"
                placeholder="Road Name"
                value={RoadForm.name}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, name: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                type="text"
                placeholder="Code (e.g. RT-001)"
                value={RoadForm.code}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, code: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                type="text"
                placeholder="Start Location"
                value={RoadForm.startLocation}
                onChange={(e) =>
                  setRoadForm({
                    ...RoadForm,
                    startLocation: e.target.value,
                  })
                }
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                type="text"
                placeholder="End Location"
                value={RoadForm.endLocation}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, endLocation: e.target.value })
                }
                className="form-control"
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6 col-lg-3">
              <input
                type="time"
                value={RoadForm.time}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, time: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                type="text"
                placeholder="Duration (e.g., 30 min)"
                value={RoadForm.duration}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, duration: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                type="number"
                placeholder="Distance (km)"
                value={RoadForm.distance}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, distance: e.target.value })
                }
                className="form-control"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <input
                type="number"
                placeholder="Passenger Count"
                value={RoadForm.passengers}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, passengers: e.target.value })
                }
                className="form-control"
              />
            </div>
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-6 col-lg-3">
              <select
                value={RoadForm.priority}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, priority: e.target.value })
                }
                className="form-select"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <select
                value={RoadForm.status}
                onChange={(e) =>
                  setRoadForm({ ...RoadForm, status: e.target.value })
                }
                className="form-select"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <select
                value={RoadForm.assignedDriverId || ""}
                onChange={(e) =>
                  setRoadForm({
                    ...RoadForm,
                    assignedDriverId: e.target.value
                      ? parseInt(e.target.value)
                      : 0,
                  })
                }
                className="form-select"
              >
                <option value="">Assign Driver Later</option>
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

          <div className="d-flex justify-content-end mt-3">
            <button
              onClick={() => {
                if (RoadForm.name && RoadForm.code && RoadForm.startLocation) {
                  addRoad(RoadForm);
                  console.log(RoadForm);
                  setRoadForm({
                    name: "",
                    code: "",
                    startLocation: "",
                    endLocation: "",
                    assignedDriverId: 0,
                    time: "",
                    duration: "",
                    distance: 0.0,
                    priority: "",
                    passengers: "",
                    status: "",
                  });
                  setShowForm(false);
                } else {
                  alert("Please fill out required fields");
                }
              }}
              className="btn btn-success px-4 py-2 fw-medium"
            >
              Create Road
            </button>
          </div>
        </div>
     
    </>
  );
}

export default Form;
