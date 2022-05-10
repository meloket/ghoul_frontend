import React from "react";
import { Box } from "@material-ui/core";
import { IoIosArrowDown } from "react-icons/io";
import {FaSearch} from "react-icons/fa";
import {BsWallet2} from "react-icons/bs";
import { Link } from "react-router-dom";

import "../assets/SCSS/layouts/navbar.scss";

import Logo from "../assets/images/nav/logo.png";

const Navbar = () => {
  return (
    <Box className={"nav_container"}>
      <Box className="container">
        <img src={Logo} alt="logo" style={{width: 45, height: 55, cursor: "pointer"}}/>
        <Box className="navItems">
          <Box className="item">
            Home
          </Box>
          <Box className="item dropdown">
            Explore
            <IoIosArrowDown />
            <Box className="menu">
              <Link to={"/nftStaking"}>
                <Box className="menu_item">NFT Staking</Box>
              </Link>
              <Box className="menu_item">Explore Style 2</Box>
              <Box className="menu_item">Explore Style 3</Box>
              <Box className="menu_item">Explore Style 4</Box>
              <Box className="menu_item">Live Auctions</Box>
              <Box className="menu_item">Item Details</Box>
            </Box>
          </Box>
          <Box className="item">
            Activity
          </Box>
          <Box className="item dropdown">
            Community
            <IoIosArrowDown />
            <Box className="menu">
              <Box className="menu_item">Blog</Box>
              <Box className="menu_item">Blog Single</Box>
              <Box className="menu_item">Help Center</Box>
            </Box>
          </Box>
          <Box className="item dropdown">
            Pages
            <IoIosArrowDown />
            <Box className="menu">
              <Box className="menu_item">Authors</Box>
              <Box className="menu_item">Author</Box>
              <Box className="menu_item">Wallet Connect</Box>
              <Box className="menu_item">Create</Box>
              <Box className="menu_item">Log In</Box>
              <Box className="menu_item">Sing Up</Box>
            </Box>
          </Box>
          <Box className="item">
            Contact
          </Box>
        </Box>
        <Box className="item">
          <FaSearch />
        </Box>
        <Box className="walletBox btn_bordered_white">
          <BsWallet2 />
          Wallet Connect
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
