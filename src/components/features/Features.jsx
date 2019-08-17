import React from "react";
import styles from "./Features.module.scss";

import ToysIcon from "@material-ui/icons/Toys";
import WcIcon from "@material-ui/icons/Wc";
import PowerIcon from "@material-ui/icons/Power";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ReplayIcon from "@material-ui/icons/Replay";
import WifiSharpIcon from "@material-ui/icons/WifiSharp";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";

const featuresMap = {
    REFU: <ReplayIcon />,
    ALRO: <AirlineSeatReclineExtraIcon />,
    BLUG: <LocalMallIcon />,
    ACON: <ToysIcon />,
    PSOC: <PowerIcon />,
    TOIL: <WcIcon />,
    WIFI: <WifiSharpIcon />
};

const Features = ({ features }) => {
    return features.map(feature => {
        return (
            <div className={styles.featureContainer}>
                <div className={styles.icon}>
                    {featuresMap[feature.attributes.code]}
                </div>
                <div className={styles.name}>{feature.attributes.name}</div>
            </div>
        );
    });
};

Features.defaultProps = {
    features: []
};

export default Features;
