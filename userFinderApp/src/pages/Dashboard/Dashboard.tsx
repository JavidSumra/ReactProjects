import React from "react";
import User from "./User";
import Loading from "./Loading";
import { LoadingContext } from "../searchbar/SearchBar";

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
    <div className="bg-[#1f2a48] text-white rounded-lg shadow-md w-full">
      <User userData={props.UserData} />
    </div>
  );
};

export default Dashboard;
