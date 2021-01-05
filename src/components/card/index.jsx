import React from 'react'
import "./index.css"

export const Card = ({ data }) => (
    <li className="card-container" key={data.id}>
        <img src={`https://robohash.org/${data.id}?set=set2&size=180x180`} alt=""/>
        <h1>{data.name}</h1>
    </li>
)