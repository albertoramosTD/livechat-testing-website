import React from 'react'
import "../styles/CustomButton.scss";


export const CustomButton = (props) => {
    const addConfiguration = () => {
        console.log("adding")
    }
    return(
        <button className="custom-btn"  onClick={addConfiguration}>
            <p>{props.name}</p>
        </button>
    )  
}  