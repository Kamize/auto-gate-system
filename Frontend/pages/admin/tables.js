import Layout from "../../components/layout/layout";
import Tables from "../../components/tables";
import {BsPeopleFill} from 'react-icons/bs'
import axios from "axios";
import { useState,useEffect } from "react";

const TablesPages = () => {


  const URL = "http://127.0.0.1:8000"

  // /users
  const [dataTable,setTables] = useState()
  const [client,setClients] = useState()

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await Promise.all([
          axios.get(URL+"/users"),axios.get(URL+"/users/total")
        ])
        setTables(res[0])
        setClients(res[1])
      }
      catch{
        throw Error("Promise Failed")
      }
    }
    getData()
  },[])
  // console.log(client.data)
  return (
    <>
      <Layout>
        <section className="mb-4 ">
          <h1 className="select-none my-6 font-medium text-xl">Dashboard</h1>
          {client && client.data.map((data, index) => {
            return (
              <div key={index} className=" flex gap-4 items-center px-4 py-2 my-2 bg-slate-100 rounded-md">
                <BsPeopleFill size={40}/>
                <div>
                  <p className=" text-md font-bold ">Total Client</p>
                  <p >{data.jumlah}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className="mb-4">
          <Tables data={dataTable}/>
        </section>
      </Layout>
    </>
  );
};

export default TablesPages;