import React from "react";
import { Route, Routes } from "react-router-dom";
import PurchaseOrder from "../ProjectComponents/PurchaseOrder";
import PurchaseOrderTable from "../ProjectComponents/PurchaseOrderTable";
import PurchaseOrderUpdateForm from "../ProjectComponents/PurchaseOrderUpdateForm";
import PurchaseOrderFormm from "../ProjectComponents/PurchaseOrderForm";
import OrderManagement from "../ProjectComponents/MangementTabs/OrderManagement";
import Home from "../Navtabs/Home";
// import UserManagement1 from "../ProjectComponents/MangementTabs/UserManagement1";
import InventoryMangement from "../ProjectComponents/MangementTabs/InventoryMangement";
import InventoryItem from "../ProjectComponents/InventoryItem/InventoryItem";
import InventorystaffManagement from "../Component/InventorystaffManagement";
import NotFound from "../Navtabs/NotFound";
// Nadhiya...................................
import UserManagement from "../Login/UserManagement";
import AdminManagement from "../Component/AdminManagement";
import UpdateUser from "../Login/UpdateUser";
import SupplierMangement from "../ProjectComponents/MangementTabs/SupplierMangement";
import SupplierManagement from "../Component/SupplierManagement";
import ViewerManagement from "../Component/ViewerManagement";
import Header from "../NavandFooter/Header";
import Login from "../Login/Login";
import User from "../DashBoards/User";
import Purchaseordercreation from "../Component/component/Purchaseordercreation";
import Supplierpurchaseorder from "../Component/component/Supplierpurchaseorder";
import SuperAdmin from "../DashBoards/SuperAdmin";
import Admin from "../DashBoards/Admin";
import Supplier from "../DashBoards/Supplier";
import InventoryStaff from "../DashBoards/InventoryStaff";
import ProtectedRoute from "./protectedRoute";


const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login  />} />
        <Route path="/" element={<ProtectedRoute />} />

        {/* <Route path="/usermangemenit" element={<UserManagement1 />} /> */}

        {/* User Managment routes starts  */}
        <Route path="updateuser/:id" element={<UpdateUser />} />
        {/* < Route path="/superadmin" element={<SuperAdmin />} /> */}


        <Route path="/superadmin" element={<UserManagement />} />
        <Route path="/admin" element={<AdminManagement />} />
        {/* <Route path="/admin" element={<Admin/>} /> */}

        {/* User Managment routes ends */}
        {/* Inventory Managment routes starts  */}
        <Route path="/inventorymangement" element={<InventoryMangement />}>
          <Route path="inventoryitems" element={<InventoryItem />} />
        </Route>
        <Route path="/inventorystaff" element={<InventorystaffManagement />} />
        <Route path='/purchaseordercreation' element={<Purchaseordercreation />} />
        {/* <Route path='/inventorystaff' element={<InventoryStaff />} /> */}

        {/* Inventory Managment routes ends */}
        {/* Order Managment routes starts  */}
        <Route path="/ordermanagement" element={<OrderManagement />}>
          <Route path="purchaseorder" element={<PurchaseOrder />} />
          <Route path="purchaseordertable" element={<PurchaseOrderTable />} />
          <Route path="purchaseorderformm" element={<PurchaseOrderFormm />} />
        </Route>
        <Route
          path="/purchaseorderupdateform/:id"
          element={<PurchaseOrderUpdateForm />}
        />

        {/* Order Managment routes ends */}
        {/* Supplier Managment routes starts  */}
        <Route path="/suppliermangement" element={<SupplierMangement />} />
        <Route path="/supplier" element={<SupplierManagement />} />
        {/* <Route path="/supplier" element={<Supplier/>} /> */}
        <Route path="/supplierpurchaseorder" element={<Supplierpurchaseorder />} />
        {/* Supplier Managment routes ends */}
        {/* Viwer Managment routes Starts */}
        <Route path="/viewer" element={<ViewerManagement />} />

        {/* Viwer Managment routes ends */}
        {/* User Routes start  */}
        {/* <Route path="/user" element={<User />} /> */}

        {/* User Routes End */}
        {/* Error Route */}
        <Route path="*" element={<NotFound />} />
        {/* Error Route */}
        {/* ==================Nadhiya=================== */}



        {/* ==================Nadhiya=================== */}


      </Routes>
    </div>
  );
};

export default Routess;
