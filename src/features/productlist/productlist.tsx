import { Product } from "../../apiModels/product";
import ProductComp from "../../plugins/product";
import styles from "./productlist.module.scss";
interface ProductListPros {
  products?: Product[];
  title?: string;
}

const ProductList: React.FC<ProductListPros> = ({
  products = [],
  title,
  children,
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
                <ProductComp key={index} product={item} />
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
