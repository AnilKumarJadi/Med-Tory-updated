// import logo from "./logo.svg";
import "./App.css";
import PurchaseOrdersPage from "./ProjectComponents/PurchaseOrdersPage";
import { BrowserRouter } from "react-router-dom";
import OrderManagement from "./ProjectComponents/MangementTabs/OrderManagement";
import Routess from "./Routes/Routess";
 import Header from "./NavandFooter/Header";
 import Navbar from "./NavandFooter/Navbar";
import Footer from "./NavandFooter/Footer";
 import SuperAdmin from "./DashBoards/SuperAdmin";
import Login from "./Login/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Navbar /> */}

        
        <Routess />
        <Footer /> 
        {/* <SuperAdmin/> */}
        {/* <Login/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
