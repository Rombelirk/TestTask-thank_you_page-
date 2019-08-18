import React from "react";
import styles from "./Info.module.scss";
import InfoColumn from "./InfoColumn/InfoColumn";
import InfoItem from "./InfoItem/InfoItem";


const getFormattedDate = str => {
    const date = new Date(str);
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const addZero = str => {
        return +str < 10 ? "0" + str : str;
    };

    return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${addZero(
        hours
    )}:${addZero(minutes)}`;
};

const Info = ({ data }) => {
    const passenger = data.included.find(el => el.type === "passengers")
        .attributes;
    return (
        <div className={styles.info}>
            <InfoColumn title="General details">
                <InfoItem title={"Vehicle Type:"}>
                    {data.included.find(el => el.id === "BUS").attributes.name}
                </InfoItem>
                <InfoItem title={"Passanger:"}>
                    {`${passenger.first_name} ${passenger.last_name}`}
                </InfoItem>
                <InfoItem title={"Departure Date:"}>
                    {getFormattedDate(data.data.attributes.departure_time)}
                </InfoItem>
                <InfoItem title={"Arrival Date:"}>
                    {getFormattedDate(data.data.attributes.arrival_time)}
                </InfoItem>
                <InfoItem title={"Department Station:"}>
                    {data.included[0].attributes.name}
                </InfoItem>
                <InfoItem title={"Arrival Station:"}>
                    {data.included[2].attributes.name}
                </InfoItem>
            </InfoColumn>
            <InfoColumn title="Carrier Details">
                <InfoItem title={"Operating Carrier:"}>
                    {`${
                        data.included.find(el => el.id === "FEFR").attributes
                            .trade_name
                    }`}
                </InfoItem>
                <InfoItem title={"Phone:"}>
                    {`${
                        data.included.find(el => el.id === "FEFR").attributes
                            .phone
                    }`}
                </InfoItem>
                <InfoItem title={"Address:"}>
                    {`${
                        data.included.find(el => el.id === "FEFR").attributes
                            .address
                    }`}
                </InfoItem>
                <InfoItem title={"Email:"}>
                    {`${
                        data.included.find(el => el.id === "FEFR").attributes
                            .email
                    }`}
                </InfoItem>
            </InfoColumn>
            <InfoColumn title="Billing Details">
                <InfoItem title={"Total Price:"}>
                    {data.data.attributes.total_price}
                </InfoItem>
                <InfoItem title={"Purchase Date:"}>
                    {getFormattedDate(data.data.attributes.created_at)}
                </InfoItem>
            </InfoColumn>
        </div>
    );
};

export default Info;
