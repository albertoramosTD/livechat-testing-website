import React from 'react'
import "../styles/Configuration.scss"

export const Configuration = (props) => {
    return(
        <div className="configuration">
           <h2>Name: <h3>{props.name}</h3></h2>
           <h2>App ID: <h3>{props.appId}</h3></h2>
           <h2>Environment: <h3>{props.environment}</h3></h2>
           <button className="custom-btn">Use</button>
        </div>
    )
}