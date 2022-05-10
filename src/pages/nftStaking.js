import React from "react";
import { Box } from "@material-ui/core";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { NFTData } from "../constants/nftData";


import "../assets/SCSS/pages/nftStaking.scss";
import NFTCard from "../components/nftStaking/nftCard";


const NFTStaking = () => {


  return (
    <Box className={"nftStaking_container"}>
      <Box className="breadcrumb">
        <Box className="container">
          <Box className="header">NFT Staking</Box>
          <Box className="content">
            <Link to={"/"}>
              <Box>Home</Box>
            </Link>
            <RiArrowRightSLine />
            <Box>NFTStaking</Box>
          </Box>
        </Box>
      </Box>
      <Box className="explore_area">
        <Box className="container">
          <Box className="row justify_content_center">
            <Box className="col-12 col-md-8 col-lg-7">
              <Box className="intro">
                <span>KENSHO STAKING</span>
                <Box>My NFTs</Box>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
              </Box>
            </Box>
          </Box>
          <Box className="row">
            {NFTData.map((item, index) => (
              <Box className="col-12 col-sm-6 col-lg-3">
                <NFTCard key={index} tokenURI={item.tokenURI} tokenId={item.tokenId} level={item.level} name={item.name} power={item.power} isStaked={item.isStaked} xp={item.xp} xpMax={item.xpMax} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NFTStaking;
