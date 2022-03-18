import React, {useState} from 'react';
import './styles/App.scss';
import { MainScreen } from './sections/MainScreen'
import { CustomPanel } from './sections/CustomPanel'

function App() {
    const [selectedConfig, setSelectedConfig] = useState({name:'default', appId:'', environment:''});


  return (
    <div className="App">
      <CustomPanel
          selectedConfig={selectedConfig}
          setSelectedConfig={setSelectedConfig}
      />
      <MainScreen selectedConfig={selectedConfig}/>
    </div>
  );
}

export default App;
