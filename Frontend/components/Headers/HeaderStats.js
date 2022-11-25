import React from "react";

// components

import CardStats from "../Cards/CardStats.js";

export default function HeaderStats({jumlahMask,jumlahNoMask}) {
  return (
    <>
      {/* Header */}
      <div className=" bg-slate-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="User Login"
                  statTitle={jumlahMask + jumlahNoMask}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Mask"
                  statTitle={jumlahMask}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="No Mask"
                  statTitle={jumlahNoMask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
