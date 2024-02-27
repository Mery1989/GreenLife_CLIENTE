import './App.css';

import BasicExample from './components/EventCard/EventCard';
import EventListPage from './pages/EventListPages/EventListPages';
import Carrousel from "./components/Carrousel/Carrousel";
import Events from "./components/Events/Events";
import Plants from "./components/Plants/Plants";
import Calculator from "./components/Calculator/Calculator";
import FormSingup from './components/UserSingup/UserSingup';

function App() {
  return (
    <>
        <Carrousel />
    <Events />
    <Plants />
    <Calculator/>
    <EventListPage/>
    
    </>
  )
}

export default App
