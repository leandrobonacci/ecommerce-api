const router = require('express').Router();
const { Productos } = require('../../db');

router.get('/', async (req, res) => {
  console.log(req.usuarioId);
  const products = await Productos.findAll();
  res.json(products);
});

router.post('/', async (req, res) => {
  const producto = await Productos.create(req.body);
  res.json(producto);
});

router.put('/:productoId', async (req, res) => {
  await Productos.update(req.body, {
    where: { id: req.params.productoId },
  });
  res.json({ success: 'Se actualizo' });
});
router.delete('/:productoId', async (req, res) => {
  await Productos.destroy({
    where: { id: req.params.productoId },
  });
  res.json({ success: 'Se elimino' });
});
module.exports = router;
