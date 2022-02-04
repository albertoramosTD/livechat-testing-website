import React from 'react'
import '../styles/ConfigurationList.scss'
import { Configuration } from '../components/Configuration'

export const ConfigurationList = (props) => {

    const configurationList = props.list.map(config => 
        <Configuration 
            name={config.name}
            appId={config.appId}
            environment={config.environment}
        />
    )

    return(
        <div className="configuration-list">
            {configurationList}
        </div>
    )
}