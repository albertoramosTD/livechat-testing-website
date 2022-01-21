import './styles/App.scss';
import { MainScreen } from './sections/MainScreen'
import { CustomPanel } from './sections/CustomPanel'

function App() {
  return (
    <div className="App">
      <CustomPanel/>
      <MainScreen/>
    </div>
  );
}

export default App;
