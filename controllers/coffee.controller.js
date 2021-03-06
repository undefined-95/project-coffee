const Coffee = require("../Models/Coffee.model")

module.exports.coffeeController = {
  addCoffee: async (req, res) => {
    const { image, name, volume, description, price, categoryId, sugar } = req.body
    try {
      const coffee = await Coffee.create({
        image,
        name,
        volume,
        sugar,
        description,
        price,
        categoryId
      })
      res.json(coffee)
    } catch (e) {
      res
      .status(400)
      .json({ error: "Ошибка при добавлении: " + e.toString() });
    }
  },
  getCoffee:  async (req, res) => {
    try {
      const coffee = await Coffee.find()

      res.json(coffee)
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка: " + e.toString() })
    }
  },

  getCoffeeId: async (req, res) => {
    try {
      const coffee = await Coffee.findById(req.params.id)
      res.json(coffee)
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка: " + e.toString()})
    }
  },

  getCoffeeCategory: async (req, res) => {
    try {
      const coffee = await Coffee.find({categoryId: req.params.id})
      res.json(coffee)
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка: " + e.toString() })
    }
  },
  deleteCoffee: async (req, res) => {
    try {
      await Coffee.findByIdAndRemove(req.params.id)
      res.json("Кофе удалено")
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка при удалении: " + e.toString() })
    }
  },

//get random coffee
  getRandomCoffee: async (req, res) => {
    try {
      const randomCoffee = await Coffee.aggregate([{ $sample: {size: 4} }])
      res.json(randomCoffee)
    } catch (e) {
      res.json({error: "Ошибка при выводе рандомного кофе"})
    }
  }
}