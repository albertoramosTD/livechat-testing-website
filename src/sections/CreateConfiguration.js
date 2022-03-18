import React, {useState} from 'react'
import '../styles/CreateConfiguration.scss'
import Select from 'react-select'


const envOptions = [
    { value: 'stg', label: 'stg' },
    { value: 'qa', label: 'qa' },
    { value: 'prd', label: 'prd' }
]

export const CreateConfiguration = (props) => {
    const [name, setName]= useState("");
    const [appId, setAppId]= useState("");
    const [environment, setEnvironment]= useState(envOptions[0].value);

    const [nameError, setNameError]= useState(false);
    const [appIdError, setAppIdError]= useState(false);

    const clearValues = () => {
        setName("")
        setAppId("")
    }

    const validateConfiguration = () => {
        let validation = true

        if(name.length === 0) {
            setNameError(true)
            validation = false;
        }

        if(appId.length === 0){
            setAppIdError(true)
            validation = false;
        }

        return validation;
    }

    const addConfiguration = () => {
        if(validateConfiguration()){
            const newConfiguration = {
                name: name,
                appId: appId,
                environment: environment
            }
            props.create(newConfiguration)
            clearValues()
        }
    }

    const customSelectEnvStyles = {
        option: (provided, state) => ({
            ...provided,
            background: state.isSelected
                ? 'linear-gradient(110deg, rgba(85, 101, 203, 1) 0%,rgba(160, 173, 254, 1) 100%)'
                : 'white',
        }),
    }

    const onSelectEnvChange = (environment) => {
        setEnvironment(environment.value)
    };

    const updateName = (e) => {
        setName(e.target.value)
        setNameError(false)
    }
    const updateAppId = (e) => {
        setAppId(e.target.value)
        setAppIdError(false)
    }

    return(
        <div className="create-configuration">
            <h2>Create Configuration</h2>
            <p>Name:</p>
            <input
                value={name}
                onChange={updateName}
            />
            {nameError ? <span  style={{color:'red'}}>The Name field is not valid</span> : <span></span>}
            <p>App ID:</p>
            <input
                value={appId}
                onChange={updateAppId}
            />
            {appIdError ? <span style={{color:'red'}}>The AppID field is not valid</span> : <span></span>}
            <p>Environment:</p>
            <Select
                options={envOptions}
                styles={customSelectEnvStyles}
                defaultValue={envOptions[0]}
                onChange={onSelectEnvChange}
            />
            <button className="custom-btn"  onClick={addConfiguration}>
                <p>Create</p>
            </button>
        </div>
    )
}