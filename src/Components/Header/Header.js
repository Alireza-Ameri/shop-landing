import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

const Header = () => {
  return (
    <div className="flex flex-row justify-between mb-8">
      <div className="flex flex-row p-4 ">
        <div className="px-2 mx-1">
          <StorefrontIcon />
        </div>
        <div className="px-2 mx-1 font-normal text-xl">LOGO</div>
      </div>
      <div className="flex  ">
        <ul className="flex p-4 list-none  ">
          <li className="px-1 mx-1 hover:text-blue-400">
            <a href="/">Watches</a>
          </li>
          <li className="px-1 mx-1 hover:text-blue-400">
            <a href="/">Eyewear</a>
          </li>
          <li className="px-1 mx-1 hover:text-blue-400">
            <a href="/">Accessories</a>
          </li>
          <li className="px-1 mx-1 hover:text-blue-400">
            <a href="/">News</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row p-4">
        <div className="px-2 mx-1">
          <LoginIcon />
        </div>
        <div className="px-2 mx-1 hover:text-blue-400">
          <a href="/">Log In</a>
        </div>
        <div className="px-2 mx-1">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
