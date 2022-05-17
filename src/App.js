import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
