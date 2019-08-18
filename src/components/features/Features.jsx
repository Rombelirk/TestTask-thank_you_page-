import React from "react";
import {
    container,
    featuresContainer,
    chipContainer,
    title
} from "./Features.module.scss";
import Chip from "@material-ui/core/Chip";
import ToysIcon from "@material-ui/icons/Toys";
import WcIcon from "@material-ui/icons/Wc";
import PowerIcon from "@material-ui/icons/Power";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ReplayIcon from "@material-ui/icons/Replay";
import WifiSharpIcon from "@material-ui/icons/WifiSharp";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
        },
        chip: {
            margin: theme.spacing(1),
            padding: "5px 10px",
            borderColor: "#637ea8",
            color: "#637ea8",
            fontFamily: "Prometo",
            fontSize: "14px",
            width: "180px",
        }
    })
);

const featuresMap = {
    REFU: <ReplayIcon fontSize={"small"} />,
    ALRO: <AirlineSeatReclineExtraIcon />,
    BLUG: <LocalMallIcon />,
    ACON: <ToysIcon />,
    PSOC: <PowerIcon />,
    TOIL: <WcIcon />,
    WIFI: <WifiSharpIcon />
};

const Features = ({ features }) => {
    const classes = useStyles();

    return (
            <div className={container}>
                <div className={title}>Features included:</div>
                <div className={featuresContainer}>
                    {features.map(feature => {
                        return (
                            <div className={chipContainer}>
                                <Chip
                                    color={"primary"}
                                    className={classes.chip}
                                    variant={"outlined"}
                                    icon={featuresMap[feature.attributes.code]}
                                    label={feature.attributes.name}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
     
    );
};

Features.defaultProps = {
    features: []
};

export default Features;
