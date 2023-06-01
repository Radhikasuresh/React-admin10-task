import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function AddUser({ UpdateUser, currentUser, index, Adduser }) {
  const [userUpdate, setUserUpdate] = useState(false);
  const navigate = useNavigate();
  const addFormData = useFormik({
    initialValues: currentUser
      ? currentUser
      : {
          bookname: "",
          author: "",
          year: "",
          age: "",
        },
    validationSchema: yup.object({
     bookname: yup.string().required("Bookname is required"),
      author: yup.string().required("Author Name is required"),
      year: yup
        .string()
        .required("Release Year is required"),
        
      age: yup.number().min(18).max(100).required("Age is required"),
    }),
    onSubmit: (userdata) => {
      console.log(userdata)

      Adduser(userdata)
      navigate('/login1')

      if (userUpdate) {
        UpdateUser(userdata, index);
      } else {
        Adduser(userdata);
      }
      setUserUpdate(false);
    },
   
  });

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
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <form className="row g-3">
              <div className="col-md-6 d-flex gap-2 align-items-center">
                <label
                  htmlFor="bookname"
                  className="form-label badge bg-secondary py-2 "
                >
                 Bookname
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Bookname"
                  id="bookname"
                  name="bookname"
                  value={addFormData.values.bookname}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              {addFormData.errors.bookname ? <div className='text-danger'>{addFormData.errors.bookname}</div> : <></>}
              <div className="col-md-6 d-flex gap-2">
                <label
                  htmlFor="inputEmail4"
                  className="form-label badge bg-secondary py-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Author name"
                  id="author"
                  name="author"
                  value={addFormData.values.author}
                  onChange={addFormData.handleChange}
                  required
                />

              </div>
              {addFormData.errors.author ? <div className='text-danger'>{addFormData.errors.author}</div> : <></>}
             

              <div className="col-md-6 d-flex gap-2">
                <label
                  htmlFor="year"
                  className="form-label badge bg-secondary py-2"
                >
                 Release Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Release Year"
                  id="year"
                  name="year"
                  value={addFormData.values.year}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              {addFormData.errors.year ? <div className='text-danger'>{addFormData.errors.year}</div> : <></>}
              <div className="col-12 d-flex gap-2">
                <label
                  htmlFor="inputAge"
                  className="form-label badge bg-secondary py-2"
                >
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputAge"
                  placeholder="Enter Age"
                  name="age"
                  value={addFormData.values.age}
                  onChange={addFormData.handleChange}
                />
              </div>
           
                        {addFormData.errors.age ? <div className='text-danger'>{addFormData.errors.age}</div> : <></>}

              <div className="col-3 mx-auto btn-group">
                <button
                type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    addFormData.handleSubmit();
                  }}
                  className="btn btn-primary"
                >
                  ADD
                </button>
               
             
           
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
