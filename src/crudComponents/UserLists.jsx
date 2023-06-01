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
<h4 className="contentname">{user.bookname}</h4>
    <h6 ><span className="bookname">Author:</span>{user.author}</h6>
    <p><span className="bookname">Release Year:</span>{user.year}</p>
    <p><span className="bookname">Age:</span>{user.age}</p> 
</div>
<div className="col my-auto">
    <div className=" btn-group ">
    <button className="btn btn-warning" onClick={()=>EditUser(user,index)}>Edit Book</button>
<button className="btn btn-danger" onClick={()=>DeleteUser(index)}>Delete Book</button>
    </div>

</div>

</div>)}
            </div>
        </div>

      </div>
    </>)
}
export default UserLists;