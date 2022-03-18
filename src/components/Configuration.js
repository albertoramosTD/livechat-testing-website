import React, { useState } from 'react'
import "../styles/Configuration.scss"

export const Configuration = ({name, appId, environment, setSelectedConfig, selectedConfig}) => {
    const updateConfig = () => {
        setSelectedConfig({name, appId, environment});
        console.log(name, appId, environment)
    }
    console.log(JSON.stringify(selectedConfig))

    const selectedStyle = selectedConfig.appId == appId ? {boxShadow: '0px 0px 5px 1px rgba(255,255,255,.8)'} : {}

    return(
        <div className="configuration" style={selectedStyle}>
           <h2>Name: <h3>{name}</h3></h2>
           <h2>App ID: <h3>{appId}</h3></h2>
           <h2>Environment: <h3>{environment}</h3></h2>
           <button className="custom-btn" onClick={() => updateConfig()}>Use</button>
        </div>
    )
}