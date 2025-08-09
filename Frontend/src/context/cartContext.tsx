"use client";
import { IProducts } from "@/interfaces/IProducts";
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Definir el tipo del contexto
interface CartContextType {
  cart: IProducts[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

// 2. Crear el contexto con valor inicial undefined
const MyContext = createContext<CartContextType | undefined>(undefined);

// 3. Tipar el provider correctamente
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<any[]>([]);

  const contextValue: CartContextType = {
    cart,
    setCart,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// 4. Hook para consumir el contexto
export const useCart = (): CartContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
