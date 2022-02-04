import React, {useState} from 'react'
import '../styles/CreateConfiguration.scss'

export const CreateConfiguration = (props) => {
    const [name, setName]= useState("");
    const [appId, setAppId]= useState("");
    const [environment, setEnvironment]= useState("");

    const clearValues = () => {
        setName("")
        setAppId("")
        setEnvironment("")
    }

    const addConfiguration = () => {
        const newConfiguration = {
            name: name,
            appId: appId,
            environment: environment
        }
        console.log(newConfiguration)
        props.create([...props.existingList, newConfiguration])
        clearValues()
    }

    return(
        <div className="create-configuration">
            <h2>Create Configuration</h2>
            <p>Name:</p>
            <input
                value={name}
                onChange={e=>setName(e.target.value)}
            />
            <p>App ID:</p>
            <input
                value={appId}
                onChange={e=>setAppId(e.target.value)}
            />
            <p>Environment:</p>
            <input
                value={environment}
                onChange={e=>setEnvironment(e.target.value)}
            />
            <button className="custom-btn"  onClick={addConfiguration}>
                <p>Create</p>
            </button>
        </div>
    )
}