

export const getProductsInTheCart = async () => {
  try {
    const res = await fetch("http://localhost:3001/cart");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
