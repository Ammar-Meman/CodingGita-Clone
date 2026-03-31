import React from 'react'
// import Navbar from "../components/Navbar";

const Attendence = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  const today = new Date().toISOString.split("T")[0];
  console.log(today);
  return (
    <div>Attendence</div>
  )
}

export default Attendence