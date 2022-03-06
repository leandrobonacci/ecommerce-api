const router = require('express').Router();
const { Carrito } = require('../../db');

router.get('/', async (req, res) => {
  console.log(req.usuarioId);
  const Carritos = await Carrito.findAll();
  res.json(Carritos);
});

router.post('/', async (req, res) => {
  const Carritos = await Carrito.create(req.body);
  res.json(Carritos);
});
router.put('/:carritoId', async (req, res) => {
  await Carrito.update(req.body, {
    where: { id: req.params.carritoId },
  });
  res.json({ success: 'Se actualizo' });
});
router.delete('/:carritoId', async (req, res) => {
  await Carrito.destroy({
    where: { id: req.params.carritoId },
  });
  res.json({ success: 'Se elimino' });
});
module.exports = router;
