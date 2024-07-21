require("dotenv").config();
let mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const newPerson = new Person({
    name: "MeTheCoder",
    age: 54,
    favoriteFoods: ["Schwarma", "LasanyaN", "Tepache", "Saurkrat"],
  });
  // const datanewPerson.save();
  newPerson
    .save()
    .then(function (data) {
      console.log("--------");
      console.log(data);
      console.log("--------");
      done(null, data);
      console.log("+--------+");
    })
    .catch((err) => {
      console.log("============");
      console.log(err);
      console.log("============");
      done(err);
      console.log("+============+");
    });
};

const createManyPeople = (arrayOfPeople, done) => {
  console.log("--------");
  console.log("Input array of people", arrayOfPeople);
  console.log("--------");

  Person.create(arrayOfPeople)
    .then((data) => {
      console.log("--------");
      console.log(data);
      console.log("--------");
      done(null, data);
      console.log("+--------+");
    })
    .catch((err) => {
      console.log("============");
      console.log(err);
      console.log("============");
      done(err);
      console.log("+============+");
    });
  // done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  console.log("Input Argument: ", personName);
  console.log({ name: personName });
  console.log({ name: { personName } });
  Person.find({ name: personName })
    .then((foundPerson) => {
      console.log("--------");
      console.log(foundPerson);
      console.log("--------");
      done(null, foundPerson);
      console.log("--------");
    })
    .catch((err) => {
      console.log("============");
      console.log(err);
      console.log("============");
      done(err);
      console.log("============");
    });
};

const findOneByFood = async (food, done) => {
  console.log(food);
  console.log({ favoriteFoods: food });
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    console.log(data);
    done(null, data);
  } catch (error) {
    console.error("Error in finding one data for given key: ", food, error);
    done(error);
  }
};

const findPersonById = async (personId, done) => {
  console.log(personId);
  console.log({ _id: personId });
  try {
    const data = await Person.findById(personId);
    console.log(data);
    done(null, data);
  } catch (error) {
    console.error("Error in finding one data for given key: ", food, error);
    done(error);
  }
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};
/*
const btnCreateSingle = document.getElementById("create_single");
btnCreateSingle.addEventListener(async () => {
  const schema = new Schema({ name: String, age: { type: Number, min: 0 } });
  const Person = mongoose.model("Person", schema);

  const p = new Person({ name: "foo", age: "bar" });
  // Cast to Number failed for value "bar" at path "age"
  await p.save();

  const p2 = new Person({ name: "foo", age: -1 });
  // Path `age` (-1) is less than minimum allowed value (0).
  await p2.save();
});
*/
/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

/*
const createAndSavePerson2 = async (done) => {
  const newPerson = new Person({
    name: "MeTheCoder",
    age: 54,
    favoriteFoods: ["Schwarma", "Lasanya", "Tepache", "Saurkrat"],
  });
  // const datanewPerson.save();
  try {
    const data = await newPerson.save();

    console.log("--------");
    console.log(data);
    console.log("--------");
  } catch (err) {
    console.log("============");
    console.log(err);
    console.log("============");
  }
};

createAndSavePerson2();
*/

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
