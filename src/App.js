import './App.scss';
import NavBar from './components/NavBar';
import SliderFullWidth from './components/SliderFullWidth';
import CardContainerMain from './components/CardContainerMain'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SliderFullWidth />
      <CardContainerMain />
    </div>
  );
}

export default App;
