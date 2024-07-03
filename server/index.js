const express = require('express');
const mongo = require('./config/Mongo');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 3000;

// mongobd connection
mongo.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/temp",
	})
)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(process.env.ENV_TEXT);
    console.log("Hello World!")
});

