const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dbConnect = require("./dbConnect");
dbConnect.connectMySQL();

const app = express();
const port = process.env.PORT || 8080; 

app.use(cors());
app.use(express.json());

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

