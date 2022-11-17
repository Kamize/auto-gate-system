import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiFillHome, AiOutlineTable} from 'react-icons/ai';

const Layout = ({ children }) => {
  const [button, setButton] = useState(false);


  return (
    <div className="flex h-screen bg-gray-300">
      {button && (
        <aside className=" backdrop-blur-[80px] z-40 bg-[rgb(240, 255, 255)/0.56] w-64 fixed mt-16 h-screen rounded-r-[28px] rounded-br-[28px]">
          <h1 className=" text-xl font-bold pl-12 py-6">MaskDetection</h1>
          <Link href={"/admin"}>
            <div className=" pl-12 py-3 flex items-center gap-4 hover:font-bold hover:transition-all">
              <AiFillHome />
              <p className=" cursor-pointer">Dashboard</p>
            </div>
          </Link>
          <Link href={"/admin/tables"}>
            <div className="pl-12 py-3 flex items-center gap-4 hover:font-bold hover:transition-all">
              <AiOutlineTable />
              <p className=" cursor-pointer">Tables</p>
            </div>
          </Link>
        </aside>
      )}
      <div className="flex flex-col flex-1">
        <header className=" h-[70px] bg-[#2CD5D9] py-4">
          <div className="container flex items-center justify-between h-full px-6 mx-auto bg-slate-500">
            <p onClick={() => setButton(!button)} className=" cursor-pointer">
              <GiHamburgerMenu />
            </p>
          </div>
        </header>
        <main className="h-full pb-16 overflow-y-auto bg-slate-50 ">
          <div className="px-6 grid bg-slate-500 mx-auto max-w-[1400px]">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;