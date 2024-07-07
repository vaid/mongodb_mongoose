const puppySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
});

const Puppy = mongoose.model("Puppy", puppySchema);
