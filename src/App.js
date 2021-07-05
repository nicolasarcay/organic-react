import "./App.scss";
import AppRouter from "./routers/AppRouter";
import { CartProvider } from "./provider/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;
