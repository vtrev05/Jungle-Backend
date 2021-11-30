const mongoose = require("mongoose");
const Animal = require ("../models/Animal.model")

const animals = [
    {
      "name": "Garrapata",
      "isCarnivore": true,
      "family": []  
    },
    {
        "name": "Tortuga mora",
        "isCarnivore": false,
        "family": []  
    },
    {
        "name": "Lechuza común",
        "isCarnivore": true,
        "family": []  
    },
    {
        "name": "Oso",
        "isCarnivore": true,
        "family": []  
    },
    {
        "name": "Marmota",
        "isCarnivore": false,
        "family": []  
    },
    {
        "name": "Gato Montes",
        "isCarnivore": true,
        "family": [] 
    },
]

const animalsArr = animals.map((c)=> new Animal(c))
 console.log(animalsArr);
mongoose
.connect('mongodb+srv://root:root@cluster0.hrquh.mongodb.net/jungledatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const allAnimals = await Animal.find();
  if (allAnimals.length) {
    await Animal.collection.drop();
  }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
      await Animal.insertMany(animalsArr);
  })
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());