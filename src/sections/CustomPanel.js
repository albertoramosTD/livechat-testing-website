import React, {useState} from "react";
import '../styles/CustomPanel.scss'
import { CreateConfiguration } from "./CreateConfiguration";
import { ConfigurationList } from "./ConfigurationList";

export const CustomPanel = () => {
    const[configurationList, setConfigurationList] = useState([]);

    return (
        <div className="custom-panel">
            <CreateConfiguration existingList={configurationList} create={setConfigurationList} />
            <ConfigurationList list={configurationList}/>
        </div>
    )
}
