const express = require("express");
const app = express();
const PORT = 5000;
const schema = require("./Schema/schema");
const cors = require("cors");
app.use(cors());
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const connectDB = require("./config/db");

//connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, console.log(`listening to port ${PORT}`));
