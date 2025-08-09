

export const addProductsCart = async (id: number) => {
  try {
    const res = await fetch("http://localhost:3001/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error("Error al agregar producto al carrito");
    }

    const data = await res.json();
    console.log("Esta es la data del addProductsCart", data);
    
    return data;
  } catch (error) {
    console.error("Error en addProductsCart:", error);
    throw error;
  }
};
