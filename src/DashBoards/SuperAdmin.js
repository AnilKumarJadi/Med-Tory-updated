import React from 'react'
import Routess from "../Routes/Routess";
import Header from "../NavandFooter/Header";
import Navbar from "../NavandFooter/Navbar";
import Footer from "../NavandFooter/Footer";
const SuperAdminDashboard = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Routess />
      <Footer />
    </div>
  )
}

export default SuperAdminDashboard
