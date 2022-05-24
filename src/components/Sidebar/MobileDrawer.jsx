import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuItems from "./MenuItems";

function MobileDrawer({ mobileOpen, handleDrawerToggle, drawerWidth }) {
  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <MenuItems desktopMode={false} />
    </Drawer>
  );
}

export default MobileDrawer;
