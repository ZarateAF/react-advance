import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/";
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 6,
        }}
      >
        {
          ({
            count,
            isMaxCountReached,
            reset, 
            increaseBy

          }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
              
              <button onClick={reset}>RESET</button>
              <hr />
              <button onClick={() => increaseBy(-2)}>-2</button>
              <hr />
              <strong className="text-white">{count}</strong>
              <hr />
              {!isMaxCountReached && <button onClick={() => increaseBy(2)}>2</button>}

            </>
          )
        }
      </ProductCard>
    </div>
  );
};
