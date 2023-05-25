import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

function AddUser({ UpdateUser, currentUser, index, Adduser }) {
  const [userUpdate, setUserUpdate] = useState(false);

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
      author: yup.string().required("Author is required"),
      // password: yup
      //   .string()
      //   .required("Email is required")
      //   .min(6, "enter minimum 6 char")
      //   .required("password is required"),
      year:yup.string().required("Release year is required"),
      age: yup.number().min(18).max(100).required("Age is required"),
    }),
    onSubmit: (userdata) => {
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
                  htmlFor="username"
                  className="form-label badge bg-secondary py-2 "
                >
                  Book Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookname"
                  name="bookname"
                  placeholder="Enter bookname"
                  value={addFormData.values.bookname}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label
                  htmlFor="inputEmail4"
                  className="form-label badge bg-secondary py-2"
                >
                Author Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  placeholder="Enter author name"
                  value={addFormData.values.author}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              <div className="col-md-6 d-flex gap-2">
                <label
                  htmlFor="inputPassword4"
                  className="form-label badge bg-secondary py-2"
                >
                Release Year:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="year"
                  name="year"
                  placeholder="Enter release year"
                  value={addFormData.values.year}
                  onChange={addFormData.handleChange}
                  required
                />
              </div>
              <div className="col-12 d-flex gap-2">
                <label
                  htmlFor="inputAge"
                  className="form-label badge bg-secondary py-2"
                >
                  Age:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter age"
                  name="age"
                  value={addFormData.values.age}
                  onChange={addFormData.handleChange}
                />
              </div>

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
                {currentUser ? (
                  <button
                    className="btn btn-warning"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setUserUpdate(true);
                      addFormData.handleSubmit();
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;