import React, { useEffect, useState } from "react";
import { UseAuth } from "../UseContext/Usecontextapi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const userInfo = UseAuth();
  const { loginUser, userRole,loged,setLoged } = userInfo;
  const [username, setUsername] = useState("");
  const [headershow, setHeadershow,] = useState(true);
  const[isloggedin,setloggedin]=useState(true);
  const navigate=useNavigate();

  // useEffect(() => {
  //   // Retrieve username from local storage on component mount
  //   const storedUsername = localStorage.getItem("username");
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   } else {
  //     setUsername("");
  //   }
  // }, []);

  // useEffect(() => {
  //   // Update username in local storage whenever loginUser or userRole changes
  //   if (loginUser && userRole) {
  //     const newUsername = userRole ? `${userRole}` : loginUser.name;
  //     setUsername(newUsername);
  //     setLoged(true);
  //     localStorage.setItem("username", newUsername);
  //   }
  //   else{
  //     navigate('/')
  //     setLoged(false);
      
  //   }
  // }, [loginUser, userRole]);
  const handleLogout=(e)=>{
    e.preventDefault();
    navigate('/')
    setLoged(true);
    // localStorage.removeItem("loggedin")
    // navigate('/')
   
  }
  console.log(username)

  const handleAudioEnded = () => {
    // Display notification after audio ends
    // You can use your preferred notification library here
    // swal(`Welcome ${username}`);
    // Hide the notification after 3 seconds
    // setTimeout(() => {
    //   swal.close();
    // }, 3000);
    toast.success(`Welcome ${username}`,{position:"top-center"})
    
  };
  return (
    <>
      {headershow && (
        <div className="header">
          {/* <div className="logoheader"> */}
          <div className="logo">
        <img src="logo.jpeg" alt="log" width={"150px"} />
      </div>
            <div className="user d-flex ">
              <audio autoPlay onCanPlay={handleAudioEnded}>
                <source src="./audio/welcome.mp3" type="audio/mp3" />
              </audio>
              <FontAwesomeIcon
                icon={faUserCircle}
                style={{ fontSize: "25px", marginRight: "10px" }}
              />
              {/* <button onClick={handleLogout}>Logout</button> */}
               { !loged ?
             
             <h5>{username} <button onClick={handleLogout}>Logout</button></h5>: <button>Login</button>} 
             
            </div>
          {/* </div> */}

          {/* <div className="navbar bg-info w-100 "></div> */}
        </div>

      )}
      <ToastContainer/>
    </>
  );
};

export default Header;
