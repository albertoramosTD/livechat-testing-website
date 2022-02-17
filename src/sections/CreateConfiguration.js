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

    const clearValues = () => {
        setName("")
        setAppId("")
    }

    // const validateConfiguration = () => {
    //     if(name.length == 0){
    //         console.log("Please fill the name")
    //     }
    //     if(appId.length == 0){
    //         console.log("Please fill the appid")
    //     }
    //     if(environment.length == 0){
    //         console.log("Please fill the env")
    //     }
    // }

    const addConfiguration = () => {
        // validateConfiguration()
        const newConfiguration = {
            name: name,
            appId: appId,
            environment: environment,
            selected: false
        }
        props.create(newConfiguration)
        clearValues()
    }


    const customSelectEnvStyles = {
      option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? 'linear-gradient(110deg, rgba(85, 101, 203, 1) 0%,rgba(160, 173, 254, 1) 100%)' : 'white',
      }),
    }

    const onSelectEnvChange = (environment) => {
       setEnvironment(environment.value)
    };

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