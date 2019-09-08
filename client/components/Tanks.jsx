import React from 'react'

import Tank from './Tank.jsx'

export default function Tanks(props) {
    return (
        <div className="tanks">
            <ul>
            {props.tanks.map(tank => {
                return <Tank key={tank.id} tank={tank} />
            })}
            </ul>
        </div>
    )
}