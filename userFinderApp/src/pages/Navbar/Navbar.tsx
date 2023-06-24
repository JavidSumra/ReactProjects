// import React from "react";
import { MoonIcon } from "@heroicons/react/24/outline";

// interface ThemeContext {
//   theme: string;
//   setTheme: (color: string) => void;
// }
const Navbar = () => {
  // const currentTheme = createContext<ThemeContext>({
  //   theme: "dark",
  //   setTheme: () => {},
  // });
  return (
    <div className="flex items-center justify-between p-1 w-full">
      <div className="text-white font-medium text-2xl">userFinder</div>
      <div>
        <MoonIcon className="h-6 w-6" aria-hidden="true"></MoonIcon>
      </div>
    </div>
  );
};

export default Navbar;
