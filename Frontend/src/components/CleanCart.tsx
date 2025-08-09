"use client";
import { useCart } from "@/context/cartContext";
import { updateCart } from "@/helpers/updateCart";
import React from "react";

const CleanCart = () => {
  const { setCart } = useCart();

  const handleCleanCart = async () => {
    try {
      await updateCart([]);
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleCleanCart} className="cursor-pointer border-2 p-2">
         🗑️ Limpiar Carrito
      </button>
    </div>
  );
};

export default CleanCart;
