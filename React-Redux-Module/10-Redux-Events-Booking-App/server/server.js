const express = require('express');
const app = express();
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// configure cors
app.use(cors());

// configure express to receive the form data
app.use(express.json());

// configure dotEnv
dotEnv.config({path : './.env'});

const hostname = process.env.LOCAL_HOST_NAME;
const port = process.env.LOCAL_PORT;

// connect to Mongo DB
mongoose.connect(process.env.MONGO_DB_URL, {
    useFindAndModify : false,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then((response) => {
    console.log(`Connected to MongoDB successfully......`);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});

// basic request
app.get('/', (request , response) => {
    response.send(`Welcome to Events Booking App`);
});

// router configuration
app.use('/api/users' , require('./router/userRouter'));
app.use('/api/events' , require('./router/eventsRouter'));

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});

