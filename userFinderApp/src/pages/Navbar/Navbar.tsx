import React, { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../../context/theme";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    let newTheme;
    if (theme === "dark") {
      newTheme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      newTheme = "dark";
      document.documentElement.classList.add("dark");
    }
    setTheme(newTheme);
  };
  return (
    <div className="flex items-center justify-between p-1 w-full max-[695px]:w-11/12">
      <div className="dark:text-white text-black font-medium text-2xl">
        userFinder
      </div>
      <div>
        <button onClick={handleTheme}>
          {theme === "dark" ? (
            <SunIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            ></SunIcon>
          ) : (
            <MoonIcon
              className="h-6 w-6 text-black"
              aria-hidden="true"
            ></MoonIcon>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
