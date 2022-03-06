const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Users } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

router.post(
  '/register',
  [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await Users.create(req.body);
    res.json(user);
  }
);

router.post('/login', async (req, res) => {
  const usuarios = await Users.findOne({
    where: { username: req.body.username },
  });
  if (usuarios) {
    const same = bcrypt.compareSync(req.body.password, usuarios.password);

    if (same) {
      const createToken = (usuarios) => {
        const payload = {
          usuarioId: usuarios.id,
          createdAt: moment().unix(),
          expiredAt: moment().add(5, 'minutes').unix(),
        };
        return jwt.encode(payload, 'frase secreta');
      };
      res.json({ success: createToken(usuarios) });
    } else {
      res.json({ error: 'Error en usuario y/o contraseña' });
    }
  } else {
    res.json({ error: 'Error en usuario y/s contraseña' });
  }
});

module.exports = router;
