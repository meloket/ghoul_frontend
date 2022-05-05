import React from "react";
import { Box } from "@material-ui/core";
import {HiOutlineShoppingBag} from "react-icons/hi";

import "../../assets/SCSS/components/landing/listingCard.scss";



const ListingCard = ({tokenURI, tokenId, name, power}) => {


    return (
        <Box className={"listingCard_container"}>
            <img src={tokenURI} alt="" />
            <Box className="cardContent">
                <Box className="tokenId">#{tokenId}</Box>
                <Box className="nameBox">
                    <span className="waterPrint">{name}</span>
                    INFO
                </Box>
                <Box className="powerBox">
                    <Box>
                        POWER
                    </Box>
                    <Box>{power}</Box>
                </Box>
                <Box className="btn_bordered_white small mt-3"><HiOutlineShoppingBag />Stake</Box>
            </Box>
        </Box>
    );
};

export default ListingCard;