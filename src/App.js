import './App.scss';
import NavBar from './components/NavBar';
import SliderFullWidth from './components/SliderFullWidth';
import CardContainerProduct from './components/CardContainerProduct'
import CardContainerMain from './components/CardContainerMain'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <SliderFullWidth />
      <CardContainerMain />
      <CardContainerProduct />
      
    </div>
  );
}

export default App;
