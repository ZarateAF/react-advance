import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/ProductInterfaces"

const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        setShoppingCart(oldShoppingcart => {
            if (count === 0) {
            //   const data = Object.assign(oldShoppingcart);
            //   delete data[product.id];
            //   return {
            //     ...data,
            //   };

                const { [product.id]: toDelete, ...rest} = oldShoppingcart;
                return rest;
            }

            return {
                ...oldShoppingcart,
                [product.id]: {...product, count}
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}

export default useShoppingCart