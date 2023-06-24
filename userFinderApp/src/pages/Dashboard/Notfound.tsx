import React from "react";

const Notfound = () => {
  return (
    <div className="bg-[#1f2a48] text-white rounded-lg shadow-md w-full flex-col flex items-center justify-center">
      <div className="p-2 text-rose-500 text-9xl [text-shadow:3px_3px_0,0_0_20px]">
        404
      </div>
      <div className="text-xl m-3 text-white font-semibold">User Not Found</div>
    </div>
  );
};

export default Notfound;
