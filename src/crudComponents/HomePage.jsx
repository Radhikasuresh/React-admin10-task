import React from "react";
import { Link } from "react-router-dom";
function HomePage({userList}) {
  console.log(userList);
  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <span className="fs-3 fw-bold bg-white rounded-circle px-2">Students</span>
          </div>
          <div className="col col-sm-3 btn-group">
            <Link to="/adduser" className="btn btn-success">
              AddUser
            </Link>
            <Link to="/userlists" className="btn btn-info">
              userList
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">

          {userList.map((user,index)=><div key={index} className="row text-start"  >
<div>
<h4 className='home_name'>{user.name}</h4> 
    <h6>Email:{user.email}</h6> 
    <p>Password:{user.password}</p> 
    <p>Address:{user.address}</p> 
</div>

</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;