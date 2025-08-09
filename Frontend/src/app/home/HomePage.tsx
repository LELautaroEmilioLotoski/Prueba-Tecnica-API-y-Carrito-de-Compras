import CartComponent from "@/components/CartComponent";
import CleanCart from "@/components/CleanCart";
import Products from "@/components/Products";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Products />
      <section>
        <h2 className="flex justify-center items-center pt-8 text-2xl">Carrito:</h2>
        <CartComponent />
      </section>
      <CleanCart />
    </>
  );
};

export default HomePage;
