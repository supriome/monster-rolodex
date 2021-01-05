import React from 'react'
import "./index.css"
import { Card } from "../card";

export const CardList = ({ lists }) => (
    <ul className="lists">
        {!!lists && lists.length > 0 && lists.map((list, index) => (
            <Card data={list} key={index} />
        ))}
    </ul>
)