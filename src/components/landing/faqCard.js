import React, { useState } from "react";
import { Box } from "@material-ui/core";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

import "../../assets/SCSS/components/landing/faqCard.scss";



const FaqCard = ({title, description}) => {

    const [isShowDetail, setIsShowDetail] = useState(false);

    return (
        <Box className={"faqCard_container"} onClick={() => setIsShowDetail(!isShowDetail)}>
            <Box className="headContainer">
                <Box>{title}</Box>
                {!isShowDetail ? <IoIosArrowDown/> : <IoIosArrowUp/>}
            </Box>
            {isShowDetail && <Box className="description">{description}</Box>}
        </Box>
    );
};

export default FaqCard;