const express = require('express')
const cookieParser = require('cookie-parser')
//setup express app
const app = express()
// let’s you use the cookieParser in your application
app.use(cookieParser());
app.get('/', (req, res) => {
res.send('welcome to a simple HTTP cookie server');
});
app.get('/deletecookie', (req, res) => { //show the saved cookies
res.clearCookie();
res.send('Cookie has been deleted successfully'); });
app.listen(8000, () => console.log('The server is running port 8000...'));