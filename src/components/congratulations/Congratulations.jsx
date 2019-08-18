import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Congratulations.module.scss";

const element = <FontAwesomeIcon size={"4x"} icon={faCheckCircle} />;

const Congratulations = ({ data }) => {
    return (
        <div className={styles.congratulations}>
            <div className={styles.checkBoxContainer}>{element}</div>
            <div className={styles.labelContainer}>
                <b>Purchase Complete!</b> <br /> Your tickets have been sent to{" "}
                <b>{data.data.attributes.email}</b>
            </div>
        </div>
    );
};

export default Congratulations;
