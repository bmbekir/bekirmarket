import styles from "./product.module.scss";
import { Product } from "../../apiModels/product";
import Money from "../money";

interface ProductProps {
  product: Product;
  onAdd?(product: Product): void;
}

const ProductComp: React.FC<ProductProps> = ({ product, onAdd = () => {} }) => {
  return (
    <div className={styles["product"]}>
      <div className={styles["product-image"]}>
        <img />
      </div>
      <div className={styles["product-price"]}>
        <Money price={product.price} />
      </div>
      <h3 className={styles["product-name"]}>{product.name}</h3>
      <a
        href="#"
        onClick={(ev) => {
          ev.preventDefault();
          onAdd(product);
        }}
        className={styles["product-add-button"]}
      >
        Add
      </a>
    </div>
  );
};
export default ProductComp;
