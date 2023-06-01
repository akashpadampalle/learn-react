import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <select onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="groceries">groceries</option>
        <option value="cloths">cloths</option>
      </select>

      <ProductList category={category} />
    </>
  );
}

export default App;
