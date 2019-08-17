import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Congratulations.module.scss";

const element = <FontAwesomeIcon size={"4x"} icon={faCheckCircle} />;

const Congratulations = props => {
    return (
        <div className={styles.congratulations}>
            <div className={styles.checkBoxContainer}>{element}</div>
            <div className={styles.labelContainer}>
                Congratulations, you have successfully purchased the ticket
            </div>
        </div>
    );
};

export default Congratulations;
