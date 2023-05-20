import React from "react";
import { Link } from "react-router-dom";

function UserLists2({userList2,DeleteUser2,EditUser2}) {
  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home2" className="btn btn-success">
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
            <div className="col">
{userList2.map((user2,index2)=><div key={index2} className="row">
<div className="col text-start">
<h4 className="home_name">{user2.name}</h4>
    <h6>Email:{user2.email}</h6>
      <p>Password:{user2.password}</p>
      <p>Subject:{user2.subject}</p>
    <p>Batch:{user2.batch}</p>
    <p>Address:{user2.address}</p> 
</div>
<div className="col my-auto">
    <div className=" btn-group ">
    <button className="btn btn-warning" onClick={()=>EditUser2(user2,index2)}>Edit</button>
<button className="btn btn-danger" onClick={()=>DeleteUser2(index2)}>delete</button>
    </div>

</div>

</div>)}
            </div>
        </div>

      </div>
    </>)
}
export default UserLists2;