import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
import connectDB from "./config/connectDB";
import cors from 'cors';

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);






// Optionally use onReady() to get a promise that resolves when store is ready.



//

require('dotenv').config();

let app = express();
app.use(cors({
	credentials: true,
	origin: true
}));

// Configure to connect to Mysql database
const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'zalo12345',
	database: 'booking'
};

const sessionStore = new MySQLStore(options);
//
// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	passwword: 'zalo12345',
// 	database: 'booking'
// });

app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

sessionStore.onReady().then(() => {
	// MySQL session store ready for use.
	console.log('MySQLStore ready');
}).catch(error => {
	// Something went wrong.
	console.error(error);
});
//config app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }, { limit: '50mb' }));



viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT || 6969;

//Port === undefined => port = 6969

app.listen(port, () => {
	//callback
	console.log("Backend Nodejs is runing on the port : " + port)
})