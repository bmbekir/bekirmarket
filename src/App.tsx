import "./sass/App.scss";
import "./sass/fonts.css";
import { Cart } from "./features/cart/cart";
import Navbar from "./layout/navbar/navbar";
import Bottom from "./layout/bottom/bottom";
import ProductPage from "./pages/product";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ProductPage />
      <Bottom />
    </div>
  );
}

export default App;
