"use client";
import { useCart } from "@/context/cartContext";
import { getProductsInTheCart } from "@/helpers/getProductsInTheCart";
import React, { useEffect } from "react";

const CartComponent = () => {
  const { cart, setCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductsInTheCart();
        setCart(res); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
  <div className="p-6">
    {cart.length === 0 ? (
      <p className="text-center text-gray-500 text-lg font-medium">
        🛒 Tu carrito está vacío
      </p>
    ) : (
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-">
        {cart.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="bg-gray-800 shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Precio: <span className="font-bold text-green-600">${product.price}</span>
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

};

export default CartComponent;
