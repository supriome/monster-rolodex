import React from 'react'

import "./index.css"

export const SearchBox = ({handleChange, value, placeholder = "" }) => {
    return (
        <input className="search" type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    )
}