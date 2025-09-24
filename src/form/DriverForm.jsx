
import { User, Users } from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "../context/dataContext";
function DriverForm({setShowDriverForm}) {
    const{addDriver}=useContext(AppContext)
    const [driverForm, setDriverForm] = useState({
       name: "",
       phone: "",
       email: "",
       status: "",
       available: false,
     });
  
    return (

      <>
        
          <form action="">
            <div className="bg-white rounded shadow-sm border p-4 mb-4">
              <h2 className="h5 fw-bold text-secondary mb-4 d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                >
                  <User size={18} className="text-primary" />
                </div>
                Add New Driver
              </h2>

              <div className="row g-3">
                <div className="col-md-6 col-lg-3">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={driverForm.name}
                    onChange={(e) =>
                      setDriverForm({ ...driverForm, name: e.target.value })
                    }
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 col-lg-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={driverForm.phone}
                    onChange={(e) =>
                      setDriverForm({ ...driverForm, phone: e.target.value })
                    }
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 col-lg-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={driverForm.email}
                    onChange={(e) =>
                      setDriverForm({ ...driverForm, email: e.target.value })
                    }
                    className="form-control"
                  />
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <input
                      required
                      type="checkbox"
                      className="form-check-input"
                      id="availableNow"
                      checked={driverForm.available}
                      onChange={(e) =>
                        setDriverForm({
                          ...driverForm,
                          available: e.target.checked,
                        })
                      }
                    />
                    <label className="form-check-label" htmlFor="availableNow">
                      Available Now
                    </label>
                  </div>
                  <select
                    onChange={(e) =>
                      setDriverForm({
                        ...driverForm,
                        status: e.target.value,
                      })
                    }
                    name=""
                    id=""
                    className="col-md-6 col-lg-2 w-50 "
                  >
                    <option value=""></option>
                    <option value="Online">Online</option>
                    <option value="Break">Break</option>
                    <option value="On-route">On-route</option>
                  </select>
                </div>
              </div>
              <div className="d-flex  ">
                <button
                  onClick={() => {
                    if (
                      driverForm.name != "" &&
                      driverForm.email != "" &&
                      driverForm.phone != "" &&
                      driverForm.status != ""
                    ) {
                      console.log(driverForm);
                      addDriver(driverForm);
                      setShowDriverForm(false);
                    } else {
                      alert("Please enter data of new driver");
                    }
                  }}
                  className="btn btn-primary px-4 py-2 m-3 ms-auto"
                >
                  Add Driver
                </button>
              </div>
            </div>
          </form>
        
      </>
    );
}

export default DriverForm;