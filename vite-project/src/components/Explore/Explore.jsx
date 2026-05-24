import React from "react";
import ExploreImgData from "./ExploreImgData";
import ExportTable from "./ExportTable";
import ExportFooter from "./ExportFooter";


function Explore() {
  return (
    <div>
      {/* Top section for Explore Images */}
      <ExploreImgData />

      {/* Main section for North East-Travels */}
      <div className="bg-[rgb(241,241,241)] p-8 shadow-lg border max-w-7xl mx-auto h-auto rounded-[32px] mt-[-1rem] relative">
        <h1 className="text-gray-800 text-[1.6rem] font-bold text-center">
          North East-Travels
        </h1>

        {/* Horizontal line below the heading */}
        <span className="block border-b-2 border-gray-300 w-full mt-2"></span>

        {/* Content section */}
        <div className="mt-14">
          <ExportTable />
        </div>
      </div>
     <ExportFooter/>
    </div>
  );
}

export default Explore;
