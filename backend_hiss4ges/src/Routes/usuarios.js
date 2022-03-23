const Users = require("../models/Usuario");
const router = require("express").Router();

//Obtenemos todos los usuarios
router.get("/", async (req, res) => {
  const Usuarios = await Users.findAll();
  res.json(Usuarios);
});

//peticion get enviando el id como key del usuario
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = await Users.findByPk(id);
  res.json(usuario);
});

router.post("/", async (req, res) => {
  const { name, user_pass, user_mail } = req.body;

  if (!name || !user_pass || !user_mail) {
    return res.status(400).json({
      Error: "Completa los campos",
    });
  }
  const user = await Users.create({ name, user_mail, user_pass });
  res.json(user);
});

module.exports = router;
