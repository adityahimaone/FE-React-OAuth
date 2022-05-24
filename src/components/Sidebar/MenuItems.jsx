import React from "react";
import { Link, useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BiHomeAlt } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";

function MenuItems({ desktopMode }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Dashboard",
      path: "/home",
      icon: <BiHomeAlt className="h-8 w-8" />,
    },
    {
      text: "Cars",
      path: "/home",
      icon: <BsTruck className="h-8 w-8" />,
    },
  ];

  const active = (
    <span
      className="absolute inset-y-0 left-0 w-1 bg-blue-300 rounded-tr-lg rounded-br-lg"
      aria-hidden="true"
    ></span>
  );

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          disablePadding={true}
          key={item.text}
          onClick={() => navigate.push(item.path)}
        >
          {navigate.asPath === item.path ? active : null}
          <div
            className={`flex p-2 w-full items-center overflow-clip ${
              desktopMode ? "flex-col justify-center" : "flex-row space-x-2"
            }`}
          >
            <div>{item.icon}</div>
            <div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

export default MenuItems;
