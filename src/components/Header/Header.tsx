import React from "react";

function Header(props: any) {
  console.log(4, props.postJob);
  return (
    <div className="bg-slate-200 w-full py-1 items-center flex justify-between  px-12">
      <div className="w-full sm:flex hidden space-x-4 items-center justify-between py-2">
        {/* <MagnifyingGlassIcon className="w-8 h-8" /> */}
        <h1 className="text-xl text-gray-900 font-medium">Web3Jobs.work</h1>

        <div className="items-center w-full justify-center flex space-x-4">
          {/* <CpuChipIcon className="w-6 h-6" /> */}
        </div>

        <div className="items-center justify-end space-x-6 flex w-full">
          <button
            className="text-xl text-gray-900 font-medium"
            onClick={() => props.setPostJob(true)}
          >
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
