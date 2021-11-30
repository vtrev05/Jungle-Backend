const mongoose = require("mongoose");
const Habitat = require ("../models/Habitat.model")

const habitats = [
    {
      "name": "Bosque",
      "location": [-1.0000000, 41.0000000],
      "mode": "tierra"  
    },
    {
        "name": "Árido",
        "location": [-69.2500000, -24.5000000],
        "mode": "tierra"  
    },
    {
        "name": "Trópico",
        "location": [-1.831239, -78.183406],
        "mode": "aire"  
    },
    {
        "name": "Tundra",
        "location": [53.87413, -166.53408],
        "mode": "tierra"  
    },
    {
        "name": "Bosque",
        "location": [2.2500000, 42.5000000],
        "mode": "tierra"  
    },
    {
        "name": "Bosque mediterráneo",
        "location": [45.557, -3.1632],
        "mode": "tierra"  
    },
]

const habitatArr = habitats.map((c)=> new Habitat(c))
 console.log(habitatArr);
mongoose
.connect('mongodb+srv://root:root@cluster0.hrquh.mongodb.net/jungledatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const allHabitats = await Habitat.find();
  if (allHabitats.length) {
    await Habitat.collection.drop();
  }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
      await Habitat.insertMany(habitatArr);
  })
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());