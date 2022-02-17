import React from 'react'
import '../styles/MainScreen.scss'

export const MainScreen = (props) => {
    
    return (
        <div className="main-screen">
           <h2>Name: <h3>{props.selectedConfig.name}</h3></h2>
           <h2>App ID: <h3>{props.selectedConfig.appId}</h3></h2>
           <h2>Environment: <h3>{props.selectedConfig.environment}</h3></h2>
        </div>
    )
}