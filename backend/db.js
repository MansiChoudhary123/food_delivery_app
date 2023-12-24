const mongoose = require("mongoose");

const mongoURI =
  "mongodb://food:mansi123@ac-am8yyr0-shard-00-00.inlsnnd.mongodb.net:27017,ac-am8yyr0-shard-00-01.inlsnnd.mongodb.net:27017,ac-am8yyr0-shard-00-02.inlsnnd.mongodb.net:27017/food?ssl=true&replicaSet=atlas-xz0ikp-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Use the specific database name in the connection URI
    const db = mongoose.connection.db;

    const fetched_data = db.collection("food_items");

    const data = await fetched_data.find({}).toArray();

    const foodCategory = db.collection("foodCategory");

    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongoDB;
