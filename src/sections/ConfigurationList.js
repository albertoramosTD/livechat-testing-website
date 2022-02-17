import React from 'react'
import '../styles/ConfigurationList.scss'
import { Configuration } from '../components/Configuration'

export const ConfigurationList = ({list, setSelectedConfiguration}) => {

    const configurationList = list.map(config => 
        <Configuration 
            name={config.name}
            appId={config.appId}
            environment={config.environment}
            selected={config.selected}
        />
    )

    return(
        <div className="configuration-list">
            {configurationList}
        </div>
    )
}