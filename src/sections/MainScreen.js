import React from 'react'
import '../styles/MainScreen.scss'

export const MainScreen = ({selectedConfig}) => {
    
    return (
        <div className="main-screen">
           <h2>Name: <span>{selectedConfig.name}</span></h2>
           <h2>App ID: <span>{selectedConfig.appId}</span></h2>
           <h2>Environment: <span>{selectedConfig.environment}</span></h2>
        </div>
    )
}