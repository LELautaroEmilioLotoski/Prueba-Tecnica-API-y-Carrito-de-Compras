import React from "react";
import { useCart } from "@/context/cartContext";
import { addProductsCart } from "@/helpers/addProductsCart";

const Cart = ({ id }: any) => {
  const { setCart } = useCart();

  const handleClick = async () => {
    try {
      const res = await addProductsCart(id);
      setCart(res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="cursor-pointer border-1 p-2">
        Agregar al carrito
      </button>
    </>
  );
};

export default Cart;
