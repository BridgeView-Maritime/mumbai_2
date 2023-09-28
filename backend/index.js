const connectToMongo = require("./db");
const express = require("express");
const app = express();
const port = 5000;
var cors=require('cors');

app.use(cors())
connectToMongo();
app.use(express.json());
app.use("/api", require("./routes/user"));
app.use("/gen", require("./routes/gen"));
app.use("/get", require("./routes/get"));

// app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});