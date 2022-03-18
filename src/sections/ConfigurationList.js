import React from 'react'
import '../styles/ConfigurationList.scss'
import { Configuration } from '../components/Configuration'

export const ConfigurationList = ({list, selectedConfig,setSelectedConfig}) => {

    const configurationList = list.map(({name, appId, environment}) =>
        <Configuration 
            name={name}
            appId={appId}
            environment={environment}
            selectedConfig={selectedConfig}
            setSelectedConfig={setSelectedConfig}
        />
    )

    return(
        <div className="configuration-list">
            {configurationList}
        </div>
    )
}