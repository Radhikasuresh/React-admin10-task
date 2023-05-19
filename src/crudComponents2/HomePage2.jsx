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
              AddUser
            </Link>
            <Link to="/userlists2" className="btn btn-info">
              UserList
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">

          {userList2.map((user2,index2)=><div key={index2} className="row text-start"  >
<div>
<h4 className="home_name">{user2.name}</h4>&nbsp; &nbsp;
    <h6 >Email:{user2.email}</h6>&nbsp; &nbsp;
    <p>Password:{user2.password}</p>&nbsp; &nbsp;
    <p>Password:{user2.batch}</p>&nbsp; &nbsp;
    <p>Address:{user2.address}</p> &nbsp; &nbsp;
    </div>

</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage2;