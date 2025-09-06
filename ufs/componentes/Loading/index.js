import React from "react";
import { Image } from "react-native";

import LoadingGIF from '../../assets/images/anime1.gif';
import styles from "../Loading/estilo";

export default function Loading({isLoading}) {
    return (
        <>
        {
            isLoading ?
            <Image source={LoadingGIF} style={styles.Loading} />
            :
            <></>
        }
        </>
    )
}