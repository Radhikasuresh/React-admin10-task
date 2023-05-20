import React from "react";
import { Link } from "react-router-dom";
function HomePage2({userList2}) {
  console.log(userList2);
  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <span className="fs-3 fw-bold bg-white rounded-circle px-2">Teachers</span>
          </div>
          <div className="col col-sm-3 btn-group">
            <Link to="/adduser2" className="btn btn-success">
              Add Teacher
            </Link>
            <Link to="/userlists2" className="btn btn-info">
             Teachers List
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">

          {userList2.map((user2,index2)=><div key={index2} className="row text-start"  >
<div>
<h4 className="home_name">{user2.name}</h4>
    <h6 >Email:{user2.email}</h6>
    <p>Password:{user2.password}</p>
    <p>Subject:{user2.subject}</p>
    <p>Batch:{user2.batch}</p>
    <p>Address:{user2.address}</p> 
    </div>

</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage2;