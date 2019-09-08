import React from 'react'

export default function Tank(props) {
    const {id, litres, img} = props.post
    return (
        <div className="tank">
            <h2>Tank ID: {id}</h2>
            <div className="litres">Litres in tank: {litres}</div>
            <div className="image">Image: {img}</div>
        </div>
    )
}