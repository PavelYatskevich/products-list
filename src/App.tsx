import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Providers } from "./Providers";

const DevApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/productDetails/:productName" component={ProductDetails} />
      <Route path="/" component={ProductList} />
    </Switch>
  );
};
function App() {
  return (
    <Providers>

      <div className="App">
          <DevApp />
      </div>
    </Providers>
  );
}

export default App;
