import { useContext, useState } from "react";
import { Search, Filter } from "lucide-react";
import { AppContext } from "../../context/dataContext";
function SearchLogic({ setSearchTerm, searchTerm, setFilterResult }) {
  const [filterStatus, setFilterStatus] = useState("all");
  const { roads } = useContext(AppContext);

  return (
    <>
      <div className="d-flex gap-3">
        {/* Search Input */}
        <div className="position-relative">
          <Search className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></Search>
          <input
            type="text"
            placeholder="Search routes, locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control ps-5 pe-4 py-2 w-100"
            style={{ width: "16rem" }}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="position-relative">
          <Filter className="bi bi-funnel position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"></Filter>
          <select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setFilterResult(e.target.value);
            }}
            className="form-select ps-5 pe-4 py-2"
            style={{ width: "14rem" }}
          >
            <option value="all">All Routes</option>
            <option value="assigned">Assigned</option>
            <option value="unassigned">Unassigned</option>
            <option value="high">High Priority</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchLogic;
