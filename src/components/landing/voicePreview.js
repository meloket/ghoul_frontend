import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/landing/voicePreview.scss";



const VoicePreview = ({url}) => {


    return (
        <Box className={"voicePreviewContainer"}>
            <img src={url} alt="voice preview" className="voicePreview"/>
        </Box>
    );
};

export default VoicePreview;