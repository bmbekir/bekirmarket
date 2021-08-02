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
import { SortType, SortTypeNames } from "../../apiModels/productFilter";
import { add } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import {
  getFilter,
  setBrands,
  setPage,
  setSortType,
  setTags,
  setType,
} from "./filterSlice";
import { useAppSelector } from "../../app/hooks";
import CheckboxList from "../../plugins/checkboxList";
import Pagination from "../../plugins/pagination";

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
const sortTypes = Array.from(SortTypeNames).map((item) => ({
  label: item[1],
  value: item[0],
}));
const ProductPage: React.FC<any> = () => {
  const dispatch = useDispatch();
  const filter = useAppSelector(getFilter);
  const result = getProducts(filter);
  return (
    <div className={classNames(styles["page"], styles["product-page"])}>
      {" "}
      <Layout>
        <PageLeft>
          <LeftBox title="Sorting">
            <RadioList
              checkedValue={filter.sortType}
              onChange={(value, index) => dispatch(setSortType(value))}
              items={sortTypes}
            />
          </LeftBox>
          <LeftBox title="Brands">
            <CheckboxList
              search
              placeholder="Search brand"
              all="*"
              allExtra={`(${result.totalCount})`}
              checkedValues={filter.brands}
              onChange={(value) => dispatch(setBrands(value))}
              items={result.brands.map((item) => ({
                label: item.name.replaceAll("-", " ").replace(/\s/g, " "),
                value: item.name,
                extra: `(${item.count})`,
              }))}
            />
          </LeftBox>
          <LeftBox title="Tags">
            <CheckboxList
              search
              placeholder="Search tag"
              all="*"
              allExtra={`(${result.totalCount})`}
              checkedValues={filter.tags}
              onChange={(value) => dispatch(setTags(value))}
              items={result.tags.map((item) => ({
                label: item.name,
                value: item.name,
                extra: `(${item.count})`,
              }))}
            />
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
                selectdeValue={filter.type}
                onChange={(value) => {
                  dispatch(setType(value));
                }}
                items={[
                  { label: "mug", value: "mug" },
                  { label: "shirt", value: "shirt" },
                ]}
              />
            </div>
          </ProductList>
          <Pagination
            page={filter.page}
            pageCount={result.pageCount}
            onPageChange={(page) => {
              window.scroll({ top: 0, left: 0 });
              dispatch(setPage(page));
            }}
          />
        </PageCenter>
        <PageRight>
          <Cart />
        </PageRight>
      </Layout>
    </div>
  );
};
export default ProductPage;
