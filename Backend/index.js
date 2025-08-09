const app = require("./src/server");
require("dotenv").config();
const PORT = 3001;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();