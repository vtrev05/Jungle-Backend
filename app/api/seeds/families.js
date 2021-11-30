const mongoose = require("mongoose");
const Family = require ("../models/Families.model")

const families = [
    {
      "name": "Isodidos",
      "livingInGroup": false,
      "habitat": []  
    },
    {
        "name": "Testudínidos",
        "livingInGroup": false,
        "habitat": []  
    },
    {
        "name": "Titónidos",
        "livingInGroup": false,
        "habitat": []  
    },
    {
        "name": "Úrsidos",
        "livingInGroup": false,
        "habitat": []  
    },
    {
        "name": "Esciúridos",
        "livingInGroup": true,
        "habitat": [] 
    },
    {
        "name": "Felidos",
        "livingInGroup": false,
        "habitat": []  
    },
]

const familyArr = families.map((c)=> new Family(c))
 console.log(familyArr);
mongoose
.connect('mongodb+srv://root:root@cluster0.hrquh.mongodb.net/jungledatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  const allFamilies = await Family.find();
  if (allFamilies.length) {
    await Family.collection.drop();
  }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
      await Family.insertMany(familyArr);
  })
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());