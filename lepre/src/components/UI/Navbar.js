import React from "react";
import logo from "../../assests/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div  className={classes.navbar__icons}>
        <SearchIcon fontSize="large"/>
        <DragHandleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Navbar;
