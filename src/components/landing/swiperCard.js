import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/landing/swiperCard.scss";



const SwiperCard = ({tokenURI, tokenId, roundImg, name, power}) => {


    return (
        <Box className={"swiperCard_container"}>
            <img src={tokenURI} alt="" />
            <Box className="cardContent">
                <Box className="tokenId">#{tokenId}</Box>
                <Box className="nameBox">
                    <img src={roundImg} alt=""/>
                    {name}
                </Box>
                <Box className="powerBox">
                    <Box>
                        POWER
                    </Box>
                    <Box>{power}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SwiperCard;