const express = require("express");
const app = express();
const PORT = 5000;
const schema = require("./Schema/schema");
const cors = require("cors");
app.use(cors());
const { graphqlHTTP } = require("express-graphql");

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, console.log(`listening to port ${PORT}`));
