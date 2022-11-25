import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
// components

import AdminNavbar from "../Navbars/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";
import HeaderStats from "../Headers/HeaderStats";
import FooterAdmin from "../Footers/FooterAdmin";

export default function Admin({ children, role }) {
  const [date,setDate] = useState(new Date())
  const [jumlah,setJumlah] = useState()
  const [jumlahNoMask,setJumlahNoMask] = useState()

    useEffect(() => {
      const getData = async () => {
        const res = await Promise.all([
          axios.get(`http://127.0.0.1:8000/security/withmask/jumlah/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`),
          axios.get(`http://127.0.0.1:8000/security/nomask/jumlah/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
        ])
        setJumlah(res[0].data[0].Jumlah)
        setJumlahNoMask(res[1].data[0].Jumlah)
        
      }

      getData()

        
    },[])
  return (
    <div className=" font-[Helvetica]">
      <Sidebar role={role} />
      <div className="relative md:ml-64 ">
        <AdminNavbar role={role} />
        {/* Header */}
        <HeaderStats jumlahMask={jumlah} jumlahNoMask={jumlahNoMask}/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}
