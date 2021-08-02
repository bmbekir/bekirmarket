import { Product } from "../../apiModels/product";
import ProductComp from "../product";
import styles from "./productlist.module.scss";
import RadioList from "../radioList";
import CheckboxList from "../checkboxList";
import TypeSelector from "../typeSelector";
interface ProductListPros {
  products?: Product[];
  title?: string;
  onAdd?(product: Product): void;
}

const ProductList: React.FC<ProductListPros> = ({
  products = [],
  title,
  children,
  onAdd = () => {},
}) => {
  return (
    <div className={styles["product-list"]}>
      {title ? <h1>{title}</h1> : undefined}
      {children ? (
        <div className={styles["product-list-body"]}>{children}</div>
      ) : undefined}
      {products.length > 0 ? (
        <ul className={styles["product-list-items"]}>
          {products.map((item, index) => {
            return (
              <li>
                <ProductComp
                  key={index}
                  product={item}
                  onAdd={(p) => onAdd(p)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={styles["not-found"]}>Product not found!</div>
      )}
    </div>
  );
};
export default ProductList;
