const router = require('express').Router()
const {Car} = require('../db/models')
module.exports = router

router.get('/:carID', async (req, res, next) => {
  try {
    const id = req.params.carID
    const data = await Car.findOne({
      where: {id: id}
    })
    console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})
