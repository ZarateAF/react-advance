import { createContext, ReactElement } from "react";
import useProduct from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { Product, ProductContextProps } from "../interfaces/ProductInterfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
