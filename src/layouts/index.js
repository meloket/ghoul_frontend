import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import "../assets/SCSS/layouts/layouts.scss"


import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {

    return (
        <Box className={"layouts_container"}>
            <Navbar />
            <Box className="mainContent">{children}</Box>
            <Footer />

        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;