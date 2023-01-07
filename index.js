const express = require('express');
require('dotenv').config();

const app = express();


app.get('/',(req, res) => (
	res.send('<h1>Hello world</h1>')
));

app.listen(process.env.PORT,process.env.HOSTNAME, () => (
		console.log(`Server running on port ${process.env.PORT}`)));