import { useContext } from "react";
import { AppContext } from "../App";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function Product() {
  const { products } = useContext(AppContext);
  const { slug } = useParams();

  const product = products.find((product) => product.slug === slug);

  console.log('Product:', product); // Логирование данных продукта

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <h1>{product.name}</h1>
      <img
        src={product.picture}
        alt={product.name}
        className="Product__image"
      />
      <span className="Product__price">${product.price}</span>
      <span className="Product__description">{product.description}</span>
    </div>
  );
}
