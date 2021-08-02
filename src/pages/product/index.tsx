import styles from "./productpage.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { Product } from "../../apiModels/product";
import Layout, {
  PageCenter,
  PageLeft,
  PageRight,
} from "../../layout/structure";
import LeftBox from "../../plugins/leftbox";
import RadioList from "../../plugins/radioList";
import TypeSelector from "../../plugins/typeSelector";
import ProductList from "../../plugins/productlist/productlist";
import { Cart } from "../../features/cart/cart";
import getProducts from "../../api/product";
import { SortType } from "../../apiModels/productFilter";
import { add } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const p: Product = {
  tags: ["Trees"],
  price: 1,
  name: "Handcrafted Trees Mug",
  description:
    "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
  slug: "Handcrafted-Trees-Mug",
  added: 1485723766805,
  manufacturer: "OHara-Group",
  itemType: "mug",
};

const ProductPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const result = getProducts({
    brands: ["*"],
    page: 1,
    pageSize: 16,
    sortType: SortType.PriceHighToLow,
    tags: ["*"],
    type: "shirt",
  });
  return (
    <div className={classNames(styles["page"], styles["product-page"])}>
      {" "}
      <Layout>
        <PageLeft>
          <LeftBox title="Sorting">
            {/* <RadioList
              checkedValue={radioTest}
              onChange={(value, index) => setRadioTest(value)}
              items={[
                { label: "item 1", value: "1" },
                { label: "item 2", value: "2" },
                { label: "item 3", value: "3" },
              ]}
            /> */}
          </LeftBox>
        </PageLeft>
        <PageCenter>
          <ProductList
            title="Products"
            onAdd={(p) => {
              dispatch(add(p));
            }}
            products={result.products}
          >
            <div style={{ width: "129px" }}>
              <TypeSelector
                selectdeValue="shirt"
                items={[
                  { label: "mug", value: "mug" },
                  { label: "shirt", value: "shirt" },
                ]}
              />
            </div>
          </ProductList>
        </PageCenter>
        <PageRight>
          <Cart />
        </PageRight>
      </Layout>
    </div>
  );
};
export default ProductPage;
