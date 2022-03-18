import React, {useState} from "react";
import '../styles/CustomPanel.scss'
import { CreateConfiguration } from "./CreateConfiguration";
import { ConfigurationList } from "./ConfigurationList";

export const CustomPanel = ({selectedConfig,setSelectedConfig}) => {

    const[configurationList, setConfigurationList] = useState([]);

    const addConfiguration = (newConfiguration) => {
        setConfigurationList([...configurationList, newConfiguration])
    }

    return (
        <div className="custom-panel">
            <CreateConfiguration create={addConfiguration} />
            <ConfigurationList 
                list={configurationList}
                selectedConfig={selectedConfig}
                setSelectedConfig={setSelectedConfig}
            />
        </div>
    )
}
