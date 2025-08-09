"use client";
import React, { useState, useEffect } from "react";
import { getProducts } from "@/helpers/getProducts";
import { IProducts } from "@/interfaces/IProducts";
import Cart from "./Cart";

const Products = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [bestCombo, setBestCombo] = useState<IProducts[]>([]);
  const [budget, setBudget] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(event.target.value);
    setBudget(num);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: IProducts[] = await getProducts();
        setProducts(res);

        // Buscar la mejor combinación apenas se cargan los productos
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const combo = findBestCombination(products, budget);
      setBestCombo(combo);
    }
  }, [products, budget]);

  const findBestCombination = (products: IProducts[], budget: number) => {
    let bestCombo: IProducts[] = [];
    let bestTotal = 0;

    const generateCombinations = (
      index: number,
      currentCombo: IProducts[],
      total: number
    ) => {
      if (total > budget) return;

      if (total > bestTotal) {
        bestTotal = total;
        bestCombo = [...currentCombo];
      }

      if (index >= products.length) return;

      generateCombinations(
        index + 1,
        [...currentCombo, products[index]],
        total + products[index].price
      );

      generateCombinations(index + 1, currentCombo, total);

      return bestCombo;
    };

    generateCombinations(0, [], 0);

    return bestCombo;
  };

  const totalBestCombo = bestCombo.reduce((acc, p) => acc + p.price, 0);

return (
  <section className="flex flex-wrap lg:flex-nowrap gap-6 justify-between items-start p-4">
    
    {/* Lista de productos */}
    <section className="flex-1">
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-gray-800 text-white rounded w-48"
          >
            <div className="mb-1">
              <span>{product.name}</span>
            </div>
            <div className="mb-2">
              <span>Price: {product.price}</span>
            </div>
            <Cart id={product.id} />
          </div>
        ))}
      </div>
    </section>

    {/* Mejor combinación */}
    <section className="bg-green-900 text-white rounded p-4 w-full max-w-xs self-start">
      <h2 className="text-lg font-bold mb-2">Mejor combinación:</h2>
      <span className="text-[15px] text-gray-300">Escribe el presupuesto que tienes disponible y el sistema te hará dirá cuantos productos puedes comprar sin pasarse de tu presupuesto correspondiente</span>
      {bestCombo.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}
      <div className="mt-2 font-semibold">Total: ${totalBestCombo}</div>

      <input
        type="number"
        placeholder="Presupuesto disponible..."
        onChange={handleChange}
        className="mt-3 w-full p-2 rounded text-white border-1"
      />
    </section>

  </section>
);

};

export default Products;
