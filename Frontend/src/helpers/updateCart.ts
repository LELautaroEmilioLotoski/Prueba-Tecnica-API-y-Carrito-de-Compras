



export const updateCart = async (datos: []) => {
  try {
    const res = await fetch("http://localhost:3001/cart/update", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json' // Ajusta según el tipo de contenido
      },
      body: JSON.stringify(datos)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
