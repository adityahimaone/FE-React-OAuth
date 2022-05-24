import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { BiHomeAlt, BiMenu, BiChevronDown } from "react-icons/bi";

function Appbar({ drawerWidth, handleDrawerToggle }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <IconButton
          // color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <BiMenu className="h-7 w-7" />
        </IconButton>
        <div className="flex w-full">
          <div className="grow py-2 invisible sm:visible"></div>
          <div className="flex-none space-x-5">
            <div className="inline">
              <input
                type="text"
                placeholder="Search"
                className="border p-1 w-32 rounded-sm"
              />
              <button className="p-1 border rounded-sm border-primaryDarkBlue-400 text-primaryDarkBlue-400">
                Search
              </button>
            </div>
            <button type="button" onClick={() => setDropdown(!dropdown)}>
              <div className="text-black font-semibold flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-violet-300 flex justify-center items-center">
                  U
                </div>
                <p className="font-normal">Unis Badri</p>
                <BiChevronDown className="h-7 w-7" />
              </div>
            </button>
            {dropdown && (
              <ul
                className={`absolute w-[150px] right-5 top-16 bg-primaryDarkBlue-400 rounded shadow-2xl z-auto  text-white transition-all`}
              >
                <li className="font-regular  text-center py-3 hover:bg-blue-200 hover:rounded">
                  <button type="button">Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
