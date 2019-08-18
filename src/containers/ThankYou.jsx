import React from "react";
import styles from "./ThankYou.module.scss"
import Congratulations from "../components/congratulations/Congratulations";
import Features from "../components/features/Features";
import Info from "../components/info/Info";
import { Container, Paper } from "@material-ui/core";
import data from "../data.js";

const ThankYou = () => {
    const getFeatures = () => {
        return data.included.filter(
            element => element.type === "fare_features"
        );
    };

    return (
        <Container className={styles.container} maxWidth={"md"}>
            <Paper className={styles.paper}>
                <Congratulations data={data} />
                {/* <div className={styles.row}> */}
                <Info data={data} />
                <Features features={getFeatures()} />

                {/* </div> */}
            </Paper>
        </Container>
    );
};

export default ThankYou;
