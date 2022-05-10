import React from "react";
import { Box } from "@material-ui/core";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaVine, FaPaperPlane } from "react-icons/fa";
// import { Link } from "react-router-dom";

import "../assets/SCSS/layouts/footer.scss";

import Logo from "../assets/images/nav/logo.png";


const Footer = () => {

    return (
        <Box className={"footer_container"}>
            <Box className="container">
                <Box className="top">
                    <Box className="row">
                        <Box className="col-12 col-sm-6 col-lg-3 res-margin">
                            <img src={Logo} alt="logo" className="logoImg" />
                            <Box className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</Box>
                            <Box className="socialIcons">
                                <Box className="iconBox"><FaFacebookF /></Box>
                                <Box className="iconBox"><FaTwitter /></Box>
                                <Box className="iconBox"><FaGooglePlusG /></Box>
                                <Box className="iconBox"><FaVine /></Box>
                            </Box>
                        </Box>
                        <Box className="col-12 col-sm-6 col-lg-3 res-margin">
                            <Box className="title">Useful Links</Box>
                            <Box className="menu">
                                <Box>All NFTs</Box>
                                <Box>How it works</Box>
                                <Box>Create</Box>
                                <Box>Explore</Box>
                                <Box>Privacy & Terms</Box>
                            </Box>
                        </Box>
                        <Box className="col-12 col-sm-6 col-lg-3 res-margin">
                            <Box className="title">Community</Box>
                            <Box className="menu">
                                <Box>Help Center</Box>
                                <Box>Partners</Box>
                                <Box>Suggestions</Box>
                                <Box>Blog</Box>
                                <Box>Newsletter</Box>
                            </Box>
                        </Box>
                        <Box className="col-12 col-sm-6 col-lg-3">
                            <Box className="title">Subscribe Us</Box>
                            <Box className="subscribeBox">
                                <input type={"email"} className="emailInput" placeholder="info@yourmail.com"/>
                                <Box className="submitBtn"><FaPaperPlane /></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="bottom">
                    <Box>©2022 NetStorm, All Rights Reserved.</Box>
                    {/* <Box>Made with<FaHeart/>By NFT Club</Box> */}
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;