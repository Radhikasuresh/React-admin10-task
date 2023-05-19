import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function AddUser2({UpdateUser2,currentUser2,index2,Adduser2}) {
  // console.log(currentUser);

  const [user2,setUser2]=useState(currentUser2?currentUser2:{ 
  name:'',
  email:'',
  password:'',
  batch:'',
  subject:'',
  address:''})

const handlechange = (e)=>{
  setUser2 ({...user2,[e.target.name]:e.target.value})
}


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
      {/* <div className="container">
        <div className="row my-3">
          <div className="col">
            <form className="row g-3" >
              <div className="col-md-6 d-flex gap-2 align-items-center">
                <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">
                  Name
                </label>
                <input type="text"  placeholder="Enter Name"  className="form-control" id="inputName"
                name="name" value={user2.name} onChange={handlechange} required />
              </div>
              
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                  Subject
                </label>
                <input type="text" placeholder="Enter Subject" className="form-control" id="inputEmail4" 
                  name="email" value={user2.subject} onChange={handlechange} required />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                  Email
                </label>
                <input type="email" placeholder="Enter Email" className="form-control" id="inputEmail4" 
                  name="email" value={user2.email} onChange={handlechange} required />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputPassword4"  className="form-label badge bg-secondary py-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Enter Password"
                  name="password"
                  value={user2.password}
                  onChange={handlechange}
                  required
                />
                <label htmlFor="inputAddress" className="form-label badge bg-secondary py-2">Batch</label>
                <input  type="text"
                  className="form-control"
                  placeholder="Enter the Batch"
                  value={user2.batch}
                  onChange={handlechange}/>
                    <label htmlFor="inputAddress" className="form-label badge bg-secondary py-2">Batch</label>
                
              </div>
              
              <div className="col-12 d-flex gap-2">
                <label htmlFor="inputAddress" className="form-label badge bg-secondary py-2">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Enter the Address"
                  name="address"
                  value={user2.address}
                  onChange={handlechange}
                />
                

              </div>
              <input  type="text"
                  className="form-control"
                  placeholder="Enter the Batch"
                  value={user2.batch}
                  onChange={handlechange}/>

              <div className="col-3 mx-auto btn-group">
                <button onClick={(e)=>{ e.preventDefault();Adduser2(user2);}} className="btn btn-primary">
                  ADD
                </button>
               { currentUser2?
                <button className="btn btn-warning" onClick={(e)=>{e.preventDefault();UpdateUser2(user2,index2);}}>
                  Update
                </button>:<></>}
              </div>
            </form>
          </div>
        </div>
      </div> */}<br></br>
      <div className="ad-user2">

      <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">Name:</label>{" "}
      <input type="text"  placeholder="Enter Name"  id="inputName"
                name="name" value={user2.name} onChange={handlechange} required
      ></input><br></br>
       <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">Password:</label>{" "}
      <input type="password"  placeholder="Enter Password"  id="inputPassword"
                name="password" value={user2.password} onChange={handlechange} required
      ></input><br></br>
      <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">Subject:</label>{" "}
      <input type="text"  placeholder="Enter Subject"  id="inputsubject"
                name="subject" value={user2.subject} onChange={handlechange} required
      ></input><br></br>
      <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">Gender:</label>{" "}
      <input type="text"  placeholder="Enter Gender"  id="inputgender"
                name="gender" value={user2.gender} onChange={handlechange} required
      ></input><br></br>
       <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">Email:</label>{" "}
      <input type="email"  placeholder="Enter Email-Id"  id="inputmail"
                name="email" value={user2.email} onChange={handlechange} required
      ></input><br></br>
       <label htmlFor="inputName" 
                className="form-label badge bg-secondary py-2 ">Address:</label>{" "}
      <input type="text"  placeholder="Enter Address"  id="inputaddress"
                name="address" value={user2.address} onChange={handlechange} required
      ></input><br></br>
      <div className="col-3 mx-auto btn-group">
                <button onClick={(e)=>{ e.preventDefault();Adduser2(user2);}} className="btn btn-primary">
                  ADD
                </button>
               { currentUser2?
                <button className="btn btn-success" onClick={(e)=>{e.preventDefault();UpdateUser2(user2,index2);}}>
                  Update
                </button>:<></>}
              </div>
     
      </div>
      
    </>
  );
}

export default AddUser2;