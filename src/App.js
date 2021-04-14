import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Tshirt from "./components/products/Tshirt";
import Kurta from "./components/products/Kurta";
import Backpack from "./components/products/Backpack";
import Shoe from "./components/products/Shoe";
import Suitcase from "./components/products/Suitcase";
import Laptop from "./components/products/Laptop";
import Sunglasses from "./components/products/Sunglasses";
import Watch from "./components/products/Watch";
import Headphones from "./components/products/Headphones";
import ScrollToTop from "./ScrollToTop";
import { auth } from "./firebase";
import { useStatevalue } from "./context/StateProvider";
import { useEffect } from "react";
import Orders from "./components/Orders";

function App() {
  const [{}, dispatch] = useStatevalue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/tshirt">
            <Tshirt />
          </Route>
          <Route path="/backpack">
            <Backpack />
          </Route>
          <Route path="/laptop">
            <Laptop />
          </Route>
          <Route path="/shoe">
            <Shoe />
          </Route>
          <Route path="/kurta">
            <Kurta />
          </Route>
          <Route path="/sunglasses">
            <Sunglasses />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path="/suitcase">
            <Suitcase />
          </Route>
          <Route path="/headphones">
            <Headphones />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
