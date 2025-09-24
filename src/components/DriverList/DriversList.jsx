import { User,Users } from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "../../context/dataContext";
import DriverForm from "../../form/DriverForm";

function DriversList() {
  const { drivers, deleteDriver, toggleStatus, addDriver } =
    useContext(AppContext);
  const [showDriverForm, setShowDriverForm] = useState(false);

  return (
    <>
      <div className="container d-flex flex-column my-5">
        <div className="d-flex  mb-5 m-4">
          <h2 className="h5 fw-semibold text-dark d-flex align-items-center  gap-2">
            <div
              className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded"
              style={{ width: "32px", height: "32px" }}
            >
              <Users size={18} className="text-primary" />
            </div>
            Drivers
          </h2>
          <div className="ms-auto p-4  d-flex justify-content-center align-items-center">
            
           
          
          </div>

          <button
            className="btn btn-primary m-3 "
            onClick={() => {
              setShowDriverForm(!showDriverForm);
            }}
          >
            Add Driver +
          </button>
        </div>
        {/* form */}

        {showDriverForm && <DriverForm setShowDriverForm={setShowDriverForm} />}

        {/* all drivers */}
        <div className="  rounded d-flex flex-wrap m-auto ">
          {drivers.map((d) => (
            <div
              className="col-lg-3 col-md-5 col-sm-12 p-4 bg-light m-4 rounded border border-light d-flex flex-column"
              key={d.id}
              style={{ marginBottom: "10px" }}
            >
              <p className="fw-bolder d-flex ">
               <div className="rounded-circle " style={{width:"50px", height:"30px"}}><img className="img-fluid w-50 h5 rounded-circle" src={d.avatar}/></div> {d.name}{" "}
               
              </p>
              <p>{d.email}</p>
              <p>{d.phone}</p>
              <p className="text-secondary">★{d.rating}</p>
              <p>
                <span className="fw-bolder">start Work at : </span>
                {d.workingHours.start}
              </p>
              <div className="d-flex ">
                <div>
                  <span
                    className={`me-auto badge rounded-pill px-2 py-1 ${
                      d.available
                        ? "bg-success text-light"
                        : "bg-danger text-light"
                    }`}
                  >
                    {d.available ? "Available" : "Busy"}
                  </span>
                </div>

                <div className="d-flex flex-column  ms-auto">
                  <button
                    className="ms-auto m-2 btn btn-success ms-auto"
                    onClick={() => {
                      toggleStatus(d.id);
                      console.log(d.available);
                    }}
                  >
                    Updata State
                  </button>
                  <button
                    className="m-2 btn btn-danger"
                    onClick={() => deleteDriver(d.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DriversList;
