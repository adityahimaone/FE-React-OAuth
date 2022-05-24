import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuItems from "./MenuItems";

function DesktopDrawer({ drawerWidth }) {
  return (
    <Drawer
      variant="permanent"
      classes={{ paper: " bg-red" }}
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      <div className="flex flex-col w-full h-screen">
        <div className="flex w-full h-full">
          <div className="w-24 bg-primaryDarkBlue-400 text-white">
            <div className="w-24 h-16 flex justify-center items-center">
              <div className="h-8 w-8 bg-blue-100"></div>
            </div>
            <MenuItems desktopMode={true} />
          </div>
          <div className="w-full">
            <div className="w-full border-b shadow-lg pl-4 h-16 flex justify-left items-center">
              <div className="h-8 w-24 bg-blue-100"></div>
            </div>
            <div className="mx-4">
              <h1 className="text-lg font-semibold my-4">DASHBOARD</h1>
              <h2 className="text-md">Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
      {/* List */}
    </Drawer>
  );
}

export default DesktopDrawer;
