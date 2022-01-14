import { createContext, CSSProperties, ReactElement } from "react";
import useProduct from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { Product, onChangeArgs, ProductContextProps } from "../interfaces/ProductInterfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, value, onChange}: Props) => {
  const { counter, increaseBy } = useProduct({onChange, product, value});

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style} >{children}</div>
    </Provider>
  );
};
