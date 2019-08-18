import React from "react";
import { column, titleContainer } from "./InfoColumn.module.scss";

const InfoColumn = ({ title ,children}) => {
    return (
        <div className={column}>
            <div className={titleContainer}>{title}</div>
            {children}
        </div>
    );
};

export default InfoColumn;
