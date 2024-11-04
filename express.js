
const express = require('express');
const app = express();
const PORT = 3000;

//for JSON
app.use(express.json());
//to accept url-encoded requests from the payload
app.use(express.urlencoded({extended: true}));
// server start
app.get('/', (req, res) => {
    res.write('Express server running successfully');
});
// listening port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 