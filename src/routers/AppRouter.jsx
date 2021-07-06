import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Sales from "../pages/Sales";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";

function AppRouter() {
  return (
    <Router>
        <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Shop" component={Shop}></Route>
        <Route path="/Sales" component={Sales}></Route>
        <Route path="/Category" component={Category}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route path="/ProductDetail/:link" component={ProductDetail}></Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
