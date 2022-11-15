import Link from "next/link";
import {useState, useEffect} from 'react'
import axios from "axios";

export default function Home() {
  const [data,setData] = useState()
  
  useEffect(() => {
      fetch('http://127.0.0.1:8000/users')
      .then(res => {
        return res.json()
      }).then(data => setData(data))
      .catch(error => console.log(error))},[]
  )

  console.log(data)

  return (
    <>
      {data && data.map((obj) => {
        return(
        <div>{obj.namadepan}</div>
        )
      })}
    </>
  );
}


