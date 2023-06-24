import React from "react";
import {
  MapPinIcon,
  LinkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
const User = (props: any) => {
  const {
    avatar_url,
    login,
    created_at,
    blog,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    html_url,
    name,
    company,
  } = props.userData;
  const [imageData, setImageData] = React.useState("");
  React.useEffect(() => {
    setImageData(avatar_url);
  }, [avatar_url]);
  console.log(props.userData);
  const joinDate = new Date(created_at).toDateString();
  return (
    <div className="p-4 rounded-l w-full">
      <div className="top flex items-center ">
        <img
          src={`${imageData}`}
          alt=""
          className="w-24 h-24 rounded-full shadow"
        />

        <div className="flex mx-4 items-center justify-between w-full flex-wrap">
          <div className="name text-3xl font-medium flex items-center flex-col">
            <div>{name ? <span>{name}</span> : <span>{login}</span>}</div>
            <div>{blog && <span className="text-sm">{blog}</span>}</div>
            <div>
              {bio ? (
                bio
              ) : (
                <span className="text-sm">This Profile has no Bio</span>
              )}
            </div>
          </div>
          <div className="joinDate text-sm font-medium">Joined {joinDate}</div>
        </div>
      </div>
      <div className="bg-[#111111] flex items-center justify-around flex-wrap rounded-lg shadow-xl m-4 p-3 text-2xl">
        <div className="repo flex items-center justify-between flex-col hover:text-blue-500 duration-300">
          <div>Repository</div>
          <div>{public_repos}</div>
        </div>
        <div className="follower flex items-center justify-between flex-col hover:text-blue-500 duration-300">
          <div>Followers</div>
          <div>{followers}</div>
        </div>
        <div className="following flex items-center justify-between flex-col hover:text-blue-500 duration-300">
          <div>Following</div>
          <div>{following}</div>
        </div>
      </div>
      <div className="flex items-center justify-around flex-wrap">
        <div className="flex items-start flex-wrap justify-around flex-col">
          <div className="flex flex-wrap">
            <span className="flex text-lg items-center">
              <BuildingOffice2Icon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              ></BuildingOffice2Icon>
              {company ? (
                <span className="mx-2">{company}</span>
              ) : (
                <span className="mx-2">Not Available</span>
              )}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-around">
            <span className="flex text-lg items-center">
              <MapPinIcon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              ></MapPinIcon>
              {location ? (
                <span className="mx-2">{location}</span>
              ) : (
                <span className="mx-2">Not Available</span>
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-around flex-col">
          <div className="flex flex-wrap">
            <span className="flex text-lg items-center">
              <LinkIcon
                className="h-6 w-6 text-gray-300"
                aria-hidden="true"
              ></LinkIcon>
              {html_url ? (
                <span className="mx-2">{html_url}</span>
              ) : (
                <span className="mx-2">Not Available</span>
              )}
            </span>
          </div>
          <div className="flex flex-wrap hover:text-[#00acee] items-start w-full">
            <span className="flex text-lg items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-twitter h-6 w-6 text-gray-300 hover:text-[#00acee]"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              {twitter_username ? (
                <span className="mx-2">{twitter_username}</span>
              ) : (
                <span className="mx-2">Not Available</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(User);
