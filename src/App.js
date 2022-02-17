import React, {useState} from 'react';
import './styles/App.scss';
import { MainScreen } from './sections/MainScreen'
import { CustomPanel } from './sections/CustomPanel'

function App() {
  const [selectedConfig, setSelectedConfig] = useState({name:'', appId:'', environment:''})

  return (
    <div className="App">
      <CustomPanel selectedConfig={setSelectedConfig}/>
      <MainScreen selectedConfig={selectedConfig}/>
    </div>
  );
}

export default App;
