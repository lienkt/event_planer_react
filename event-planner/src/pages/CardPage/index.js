import React from "react";
import {useStyles} from "./styles";

export function CardPage({ children }) {
    const { root } = useStyles();
    return (
        <div className={root}>
            {children}
        </div>
    )
}