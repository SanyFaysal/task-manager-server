const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app");

// Or:
async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Database connected Successful");
  } catch (error) {
    console.log("Mongoose Error : ", error);
  }
}
bootstrap();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
