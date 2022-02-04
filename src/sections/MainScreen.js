import React from 'react'
import '../styles/MainScreen.scss'

export const MainScreen = (props) => {
    
    return (
        <div className="main-screen">
           <h2>Name: <h3>Testing</h3></h2>
           <h2>App ID: <h3>12345</h3></h2>
           <h2>Environment: <h3>STG</h3></h2>
        </div>
    )
}