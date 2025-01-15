const express = require("express");
const cors = require('cors');
const mainRouter = require("./routes/index"); // importing it 

const app = express();

app.use(cors());
app.use(express.json()); // Ensure this line is before your routes so before the main route 
app.use("/api/v1", mainRouter); // routing all of it to the routes folder 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});