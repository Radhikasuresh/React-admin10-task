import React from "react";
import { Link } from "react-router-dom";

function UserLists({userList,DeleteUser,EditUser}) {
  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home" className="btn btn-success">
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
            <div className="col">
{userList.map((user,index)=><div key={index} className="row">
<div className="col text-start">
<h4 className="home_name">{user.name}</h4>
<p>Gender:{user.gender}</p>
    <h6>Email:{user.email}</h6>
    <p>Attendance:{user.attendance}</p>
    <p>Password:{user.password}</p>
    <p>Address:{user.address}</p> 
</div>
<div className="col my-auto">
    <div className=" btn-group ">
    <button className="btn btn-warning" onClick={()=>EditUser(user,index)}>Edit</button>
<button className="btn btn-danger" onClick={()=>DeleteUser(index)}>delete</button>
    </div>

</div>

</div>)}
            </div>
        </div>

      </div>
    </>)
}
export default UserLists;