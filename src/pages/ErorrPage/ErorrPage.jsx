import { Link } from "react-router-dom";
function ErorrPage() {
    return (<>
    <div className="container  d-flex flex-column" style={{height:"100vh",placeItems:"center"}}>
        <div className=" flex-column rounded " style={{marginTop:"250px",display:"flex",placeItems:"center",placeContent:"center"}}>
       <h1 className="fw-bold">404</h1>
       <h3>Page Not Found</h3>
       <Link to="/"><button className="fw-light">Back to Home Page to Contain</button></Link>
        </div>
    </div>
    
   </>  );
}

export default ErorrPage;