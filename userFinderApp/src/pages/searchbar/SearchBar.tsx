import { useState, useEffect, createContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Dashboard from "../Dashboard/Dashboard";
import { API_ENDPOINT } from "../../config/constant";
import Notfound from "../Dashboard/Notfound";

export const LoadingContext = createContext(false);

type UserData = {
  avatar_url: string;
  login: string;
  created_at: string;
  blog: string;
  bio: string;
  public_repos: string;
  followers: string;
  following: string;
  location: string;
  twitter_username: string;
  html_url: string;
  name: string;
  company: string;
  message?: string;
};

const SearchBar = () => {
  const [data, setData] = useState<UserData>({
    avatar_url: "",
    login: "",
    created_at: "",
    blog: "",
    bio: "",
    public_repos: "",
    followers: "",
    following: "",
    location: "",
    twitter_username: "",
    html_url: "",
    name: "",
    company: "",
    message: "",
  });
  const [name, setName] = useState("JavidSumra");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}/${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex w-full rounded-lg p-2 bg-[#1f2a48] items-center justify-between my-2 ">
        <div className="flex items-center w-full">
          <MagnifyingGlassIcon className="h-8 w-8 text-blue-500 font-medium"></MagnifyingGlassIcon>
          <input
            type="text"
            className="w-full mx-2 bg-[#1f2a48] text-gray-400  text-xl p-2 outline-none focus:border-b focus:border-blue-500 "
            placeholder="Search Github Username"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={fetchUserData}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 duration-200 p-2 rounded text-xl font-medium"
          >
            Search
          </button>
        </div>
      </div>
      {data?.message === "Not Found" ? (
        <Notfound />
      ) : (
        <LoadingContext.Provider value={isLoading}>
          <Dashboard UserData={data} />
        </LoadingContext.Provider>
      )}
    </>
  );
};

export default SearchBar;
