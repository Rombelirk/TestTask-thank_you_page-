import React from "react";
import Congratulations from "../components/congratulations/Congratulations";
import Features from "../components/features/Features";
import { Container } from "@material-ui/core";
import data from '../data.js'
import { element } from "prop-types";

const ThankYou = () => {

    const getFeatures = () => {
    
        return data.included.filter(element => element.type === 'fare_features')
    }

    return (
        <Container maxWidth={"sm"}>
            <Congratulations />
            <Features features={getFeatures()}/>
        </Container>
    );
};

export default ThankYou;
