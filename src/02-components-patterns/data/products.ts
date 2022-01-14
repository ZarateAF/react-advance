import { Product } from "../interfaces/ProductInterfaces";

const product1 = {
    id: "1",
    title: "Coffee test",
    img: "./coffee-mug.png",
  };
  
  const product2 = {
    id: "2",
    title: "Coffee meme",
    img: "./coffee-mug2.png",
  };
  
  export const products: Product[] = [product1, product2];