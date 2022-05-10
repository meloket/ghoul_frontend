import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/nftStaking/nftCard.scss";



const NFTCard = ({tokenURI, tokenId, name, power, level, isStaked, xp, xpMax}) => {


    return (
        <Box className={"nftCard_container"}>
            <img src={tokenURI} alt="" />
            <Box className="cardContent">
                <Box className="justify_content_space_between">
                    <Box className="tokenId">#{tokenId}</Box>
                    <Box className="level">Level {level}</Box>
                </Box>
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
                <Box className="justify_content_space_between mt-3">
                    {!isStaked && <Box className="btn_bordered_white small green">Stake</Box>}
                    {isStaked && <Box className="btn_bordered_white small red">Un-Stake</Box>}
                    <Box className="btn_bordered_white small blue">LVL UP</Box>
                </Box>
                <Box className="justify_content_space_between mt-3">
                    <Box className="xpvalue">XP</Box>
                    <Box className="xpvalue">{xp} of {xpMax}</Box>
                </Box>

            </Box>
        </Box>
    );
};

export default NFTCard;