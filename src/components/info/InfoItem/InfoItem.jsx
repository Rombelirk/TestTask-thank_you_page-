import React from "react";
import { infoItem, titleContainer } from "./InfoItem.module.scss";

const InfoItem = ({ title, children }) => {
    return (
        <div className={infoItem}>
            <div className={titleContainer}>{title}</div>
            {
                children
            }
        </div>
    );
};

export default InfoItem;
