import {useEffect, useState} from "react";
import axios from "axios"

// layout for page

import Admin from "../../components/layout/layout";
import CardTableAdmin from "../../components/Cards/CardTableAdmin";

export default function Tables() {
  const [data,setData] = useState("")
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/dataharian")
        .then(data => setData(data.data))
        .catch(e => console.log(e))
    },[])
    
  return (
    <Admin role={"admin"} allUser={data.length} cardMonth={false} >
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableAdmin data={data} />
        </div>
      </div>
    </Admin>
  );
}

