import React from "react";
import User from "./User.jsx";
import Loading from "./Loading.js";
import { LoadingContext } from "../searchbar/SearchBar.js";

const Dashboard = (props: any) => {
  const loading = React.useContext(LoadingContext);
  if (loading) {
    return (
      <div className="bg-[#1f2a48] text-white rounded-lg shadow-md w-full">
        <Loading />
      </div>
    );
  }
  return (
    <div className="bg-[#1f2a48] text-white rounded-lg shadow-md w-full max-[695px]:w-11/12 ">
      <User userData={props.UserData} />
    </div>
  );
};

export default Dashboard;
