import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { UseAuth } from "../UseContext/Usecontextapi";
// import Header from "./Header";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const userInfo = UseAuth();
  const { loginUser, setLoginUser, userRole, setUserRole,loged,setLoged } = userInfo;

  const formik = useFormik({
    initialValues: {
      name: "superadmin",
      password: "supad@12",
      role: "superadmin",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Username is required")
        .test("username-match", "Invalid username", (value) =>
          loginUser.some((user) => user.username === value)
        ),
      password: Yup.string()
        .required("Password is required")
        .test("password-match", "Invalid password", (value) =>
          loginUser.some((user) => user.password === value)
        ),
    }),

    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (formik.values.role) {
      axios
        .get(`http://localhost:4000/${formik.values.role}/`)
        .then((response) => {
          console.log(response)
          setLoginUser(response.data);
        })
        .catch((error) => {
          console.error( error);
        });
    }
  }, [formik.values.role]);

  function handleSubmit(values) {
  
    const validUser = loginUser.find(
      (user) =>
        user.username === values.name && user.password === values.password
    );
    if (!validUser) {
      setError("Invalid username or password.");
    } else {
      setUserRole(validUser.username); 
      // Navigate based on the selected role
      switch (values.role) {
        case "superadmin":
          localStorage.setItem("loggedin", true)
          navigate('/superadmin');
          break;
        case "admin":
          navigate('/admin');
          break;
        case "inventorystaff":
          navigate('/inventorystaff');
          break;
        case "supplier":
          navigate('/supplier');
          break;
        case "viewer":
          navigate('/viewer');
          break;
        default:
          setError("Invalid role");
          break;
      }
      // Display welcome notification message
      toast.success("Welcome " + validUser.username, { position: "top-center" });
    }
  }

  return (
    <div className=" form_container d-flex justify-content-end ">
      <div className="Login_main"></div>
      <div className="loginform">
        <h1>Login Page</h1>
        <mark>
          <small style={{ fontSize: "12px", textAlign: "center" }}>
            <span style={{ color: "red" }}>Note:</span> Please select a role before
            filling in the username and password.
          </small>
        </mark>
        <form onSubmit={formik.handleSubmit} className="mt-2">
          <Form.Select
            value={formik.values.role}
            onChange={formik.handleChange}
            type="text"
            name="role"
            className="form-control mb-4"
          >
            <option value=""> Select Role</option>
            <option value="superadmin"> Super Admin</option>
            <option value="admin"> Admin</option>
            <option value="inventorystaff"> Inventory Staff</option>
            <option value="supplier"> Supplier</option>
            <option value="viewer"> Viewer</option>
          </Form.Select>
          <div className="inputfield ">
            <label>Username</label>
            <div className="userInput ">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="off"
            />
            <img src="user.png" alt="user" />
       </div>
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="inputfield">
            <label>Password</label>
            <div className="userInput ">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <img src="pwd.png" alt="user" />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" >Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;;
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import Form from "react-bootstrap/Form";
// import { UseAuth } from "../UseContext/Usecontextapi";
// // import Header from "./Header";
// import "./Header.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const userInfo = UseAuth();
//   const { loginUser, setLoginUser, userRole, setUserRole } = userInfo;
//   console.log(userRole);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       password: "",
//       role: "",
//     },

//     validationSchema: Yup.object({
//       name: Yup.string()
//         .required("Username is required")
//         .test("username-match", "Invalid username", (value) =>
//           loginUser.some((user) => user.username === value)
//         ),
//       password: Yup.string()
//         .required("Password is required")
//         .test("password-match", "Invalid password", (value) =>
//           loginUser.some((user) => user.password === value)
//         ),
//     }),

//     onSubmit: handleSubmit,
//   });

//   useEffect(() => {
//     if (formik.values.role) {
//       axios
//         .get(`http://localhost:4000/${formik.values.role}/`)
//         .then((response) => {
//           setLoginUser(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching user data:", error);
//         });
//     }
//   }, [formik.values.role]);

//   // import { Store } from 'react-notifications-component';

//   function handleSubmit(values) {
//     const validUser = loginUser.find(
//       (user) =>
//         user.username === values.name && user.password === values.password
//     );
//     if (!validUser) {
//       setError("Invalid username or password.");
//     } else {
//       navigate(`/${values.role}`);
//       setUserRole(validUser.username); // Changed to setUserRole
//       // Display welcome notification message
//       toast.success("welcome" + validUser.username, { position: "top-center" });
//     }
//   }

//   return (
//     <>
//       <div className="loginform">
//         <h1>Login Page</h1>

//         <mark>
//           <small style={{ fontSize: "12px", textAlign: "center" }}>
//             <span style={{ color: "red" }}>Note:</span>Please select role before
//             filling username and password
//           </small>
//         </mark>
//         <form onSubmit={formik.handleSubmit} className="mt-2">
//           <Form.Select
//             value={formik.values.role}
//             onChange={formik.handleChange}
//             type="text"
//             name="role"
//             className="form-control mb-4"
//           >
//             <option value=""> Select Role</option>
//             <option value="superadmin"> Super Admin</option>
//             <option value={formik.values.admin}> Admin</option>
//             <option value="inventorystaff"> Inventory Staff</option>
//             <option value="supplier"> supplier</option>
//             <option value={formik.values.viewer}> Viewer</option>
//           </Form.Select>
//           <div className="inputfield">
//             <label>Username</label>
//             <input
//               type="text"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <div className="error">{formik.errors.name}</div>
//             ) : null}
//           </div>
//           <div className="inputfield">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div className="error">{formik.errors.password}</div>
//             ) : null}
//           </div>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;
// Updated Login component
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { UseAuth } from "../UseContext/Usecontextapi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const userInfo = UseAuth();
//   const { loginUser, setLoginUser, setUserRole } = userInfo;

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       password: "",
//     },

//     validationSchema: Yup.object({
//       name: Yup.string().required("Username is required"),
//       password: Yup.string().required("Password is required"),
//     }),

//     onSubmit: handleSubmit,
//   });

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/users/${formik.values.name}`)
//       .then((response) => {
//         setLoginUser(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, [formik.values.name]);

//   function handleSubmit(values) {
//     const validUser = loginUser.find(
//       (user) =>
//         user.username === values.name && user.password === values.password
//     );
//     if (!validUser) {
//       setError("Invalid username or password.");
//     } else {
//       setUserRole(validUser.role); // Set user role
//       toast.success("Welcome " + validUser.username, { position: "top-center" });
//       switch (validUser.role) {
//         case "superadmin":
//           navigate("/superadmin");
//           break;
//         case "admin":
//           navigate("/admin");
//           break;
//         case "inventorystaff":
//           navigate("/inventorymanagement");
//           break;
//         case "supplier":
//           navigate("/supplierdashboard");
//           break;
//         case "user":
//           navigate("/userdashboard");
//           break;
//         default:
//           navigate("/");
//       }
//     }
//   }

//   return (
//     <>
//       <div className="loginform">
//         <h1>Login Page</h1>
//         <form onSubmit={formik.handleSubmit} className="mt-2">
//           <div className="inputfield">
//             <label>Username</label>
//             <input
//               type="text"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <div className="error">{formik.errors.name}</div>
//             ) : null}
//           </div>
//           <div className="inputfield">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div className="error">{formik.errors.password}</div>
//             ) : null}
//           </div>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;
