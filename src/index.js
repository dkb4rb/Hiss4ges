const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./DB/database");
const usuarios = require("./Routes/usuarios");
const port = process.env.PORT || 3030;

(async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Conectados a la base de datos");
  } catch (error) {
    throw new Error(error);
  }
})();

app.use(express.json());
app.use(cors());
app.use("/usuarios", usuarios);

app.listen(port, () => {
  console.log("El servicio se inicio en el puerto: ", port);
});
