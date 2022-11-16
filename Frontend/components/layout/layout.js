import { useState,useEffect } from "react";
import Tables from "../tables";
import axios from "axios";


const Layout = ({ children }) => {
const [button, setButton] = useState(false);
const URL = "http://127.0.0.1:8000"

  // /users
  const [data,setData] = useState()

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await Promise.all([
          axios.get(URL+"/users"),axios.get(URL+"/users/total")
        ])
        setData(res)
      }
      catch{
        throw Error("Promise Failed")
      }
    }
    getData()
  },[])
  // console.log(data)

  const view = [{ title: "Total clients"}];



  return (
    <div className="flex h-screen bg-gray-300">
      {button && (
        <aside className=" z-40 bg-white w-64 fixed mt-16 h-screen">
          <h1>MaskDetection</h1>
          <p>Dashboard</p>
          <p>Forms</p>
          <p>Cads</p>
          <p>Tables</p>
        </aside>
      )}
      <div className="flex flex-col flex-1">
        <header className=" h-[70px] bg-[#2CD5D9] py-4">
          <div className="container flex items-center justify-between h-full px-6 mx-auto bg-slate-500">
            <p onClick={() => setButton(!button)}>button</p>
          </div>
        </header>
        <main className="h-full pb-16 overflow-y-auto bg-slate-50">
          <div className="container px-6 mx-auto grid bg-slate-500">
            <section className="mb-4 ">
              <h1>Dashboard</h1>
              {view.map((obj, index) => {
                return (
                  <div key={index} className="px-4 py-2 bg-slate-100 rounded-md">
                    <p className=" text-md font-bold">{obj.title}</p>
                    {data && <p>{data[1].data[0].jumlah}</p>}
                  </div>
                );
              })}
            </section>
            <section className="mb-4">
              <Tables data={data}/>
            </section>
          </div>
          {/* {children} */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
