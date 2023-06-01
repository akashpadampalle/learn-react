import { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in ", category);
    setProduct(["groceries", "cloths"]);
  }, [category]);

  return <div>ProductList</div>;
}

export default ProductList;
