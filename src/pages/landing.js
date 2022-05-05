import React from "react";
import { Box } from "@material-ui/core";
import { IoRocketOutline, IoCreateOutline } from "react-icons/io5";
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css';


import "../assets/SCSS/pages/landing.scss";

import Auction1 from "../assets/images/landing/slides/auction_1.jpg";
import Auction2 from "../assets/images/landing/slides/auction_2.jpg";
import Auction3 from "../assets/images/landing/slides/auction_3.jpg";
import Auction4 from "../assets/images/landing/slides/auction_4.jpg";
import Auction5 from "../assets/images/landing/slides/auction_5.jpg";
import Auction6 from "../assets/images/landing/slides/auction_6.jpg";
import Avatar1 from "../assets/images/landing/slides/avatar_1.jpg";
import Avatar2 from "../assets/images/landing/slides/avatar_2.jpg";
import Avatar3 from "../assets/images/landing/slides/avatar_3.jpg";
import Avatar4 from "../assets/images/landing/slides/avatar_4.jpg";
import Avatar5 from "../assets/images/landing/slides/avatar_5.jpg";
import Avatar6 from "../assets/images/landing/slides/avatar_6.jpg";

import SwiperCard from "../components/landing/swiperCard";
import ListingCard from "../components/landing/listingCard";

const Landing = () => {
  SwiperCore.use([Autoplay, Pagination]);
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    observeParents: true,
    observer: true,
    modules: [Autoplay, Pagination]
  }

  return (
    <Box className={"landing_container"}>
      <Box className="heroSection">
        <Box className="container">
          <Box className="row">
            <Box className="col-12 col-md-6 col-lg-7">
              <span>NftClub</span>
              <h1 className="mt-4">Discover, collect, and stake your KENSHO NFTs</h1>
              <p>Explore one of the first NFT collections, with usecase</p>
              <Box className="btnGroup">
                <Box className="btn_bordered_white">
                  <IoRocketOutline />
                  Explore
                </Box>
                <Box className="btn_bordered_white">
                  <IoCreateOutline />
                  Create
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 465" version="1.1"><defs><linearGradient x1="49.7965246%" y1="28.2355058%" x2="49.7778147%" y2="98.4657689%" id="linearGradient-1"><stop stop-color="rgba(69,40,220, 0.15)" offset="0%"></stop><stop stop-color="rgba(87,4,138, 0.15)" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="url(#linearGradient-1)"><animate id="graph-animation" xmlns="http://www.w3.org/2000/svg" dur="2s" attributeName="points" values="0,464 0,464 111.6,464 282.5,464 457.4,464 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,323.3 282.5,373 457.4,423.8 613.4,464 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,336.6 457.4,363.5 613.4,414.4 762.3,464 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,323.3 613.4,340 762.3,425.6 912.3,464 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,290.4 762.3,368 912.3,446.4 1068.2,464 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,329.6 912.3,420 1068.2,427.6 1191.2,464 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,402.4 1068.2,373 1191.2,412 1328.1,464 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,336.6 1191.2,334 1328.1,404 1440.1,464 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,282 1328.1,314 1440.1,372.8 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,254 1440.1,236 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,144.79999999999998 1440.1,464 0,464; 0,464 0,367 111.6,263 282.5,282 457.4,263 613.4,216 762.3,272 912.3,376 1068.2,282 1191.2,204 1328.1,164 1440.1,8 1440.1,464 0,464;" fill="freeze"></animate></polygon></g></svg>
        </Box>
      </Box>

      <Box className="cards_area">
        <Box className="container">
          <Box className="row">
            <Box className="col-12">
              <Box className="auctionHeader">
                <Box>
                  <span>KENSHO</span>
                  <h3 className="mt-3 mb-0">Your NFTs</h3>
                </Box>
                <Box>
                  <Box className="contentBtn">
                    View All
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="slidesContainer">
            <Swiper {...params}>
              <Box><SwiperCard tokenURI={Auction1} roundImg={Avatar1} tokenId={399} name={"Kensho NFT"} power={4533} /></Box>
              <Box><SwiperCard tokenURI={Auction2} roundImg={Avatar2} tokenId={399} name={"Kensho NFT"} power={4533} /></Box>
              <Box><SwiperCard tokenURI={Auction3} roundImg={Avatar3} tokenId={399} name={"Kensho NFT"} power={4533} /></Box>
              <Box><SwiperCard tokenURI={Auction4} roundImg={Avatar4} tokenId={399} name={"Kensho NFT"} power={4533} /></Box>
              <Box><SwiperCard tokenURI={Auction5} roundImg={Avatar5} tokenId={399} name={"Kensho NFT"} power={4533} /></Box>
              <Box><SwiperCard tokenURI={Auction6} roundImg={Avatar6} tokenId={399} name={"Kensho NFT"} power={4533} /></Box>
            </Swiper>
          </Box>
        </Box>
      </Box>

      <Box className="cards_area">
        <Box className="container">
          <Box className="row">
            <Box className="col-12">
              <Box className="auctionHeader">
                <Box>
                  <span>KENSHO ASSETS</span>
                  <h3 className="mt-3 mb-0">Staking</h3>
                </Box>
                <Box>
                  <Box className="contentBtn">
                    View All
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="cardsContainer">
            <ListingCard tokenURI={Auction1} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction2} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction3} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction4} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction5} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction6} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction1} tokenId={399} name={"Kensho NFT"} power={4533} />
            <ListingCard tokenURI={Auction2} tokenId={399} name={"Kensho NFT"} power={4533} />
          </Box>
        </Box>
      </Box>

      <Box className="cards_area">
        <Box className="container">
          <Box className="row">
            <Box className="col-12">
              <Box className="auctionHeader">
                <Box>
                  <span>How it works</span>
                  <h3 className="mt-3 mb-0">Create and sell your NFT</h3>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="cardsContainer">
            <Box className="guideCard">
              <Box className="iconBox wallet">
              </Box>
              <Box className="title">Connect your wallet</Box>
              <Box className="content">
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.
              </Box>
            </Box>
            <Box className="guideCard">
              <Box className="iconBox cells">
              </Box>
              <Box className="title">Select your Kenshos</Box>
              <Box className="content">
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.
              </Box>
            </Box>
            <Box className="guideCard">
              <Box className="iconBox envelop">
              </Box>
              <Box className="title">Wait for confirmation</Box>
              <Box className="content">
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.
              </Box>
            </Box>
            <Box className="guideCard">
              <Box className="iconBox bag">
              </Box>
              <Box className="title">Earn $NFTC</Box>
              <Box className="content">
                Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
