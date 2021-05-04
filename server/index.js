import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
// import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
// import MONGODB_URI from './config/keys.js';

const app = express();
// dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

const MONGODB_URI = 'mongodb+srv://todtsies:Colton123@cluster0.0brkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const linkName = process.env.MODE_ENV === 'production'

mongoose.connect(MONGODB_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true
    })
    mongoose.connection.on('connected',()=>{
        console.log('connected to db')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('err connecting', err)
    })

    // if (process.env.MODE_ENV === 'production') {
    //     module.exports = require('./prod')
    // } else {
    //     module.exports = require('./dev')
    // }
     if (linkName) {
         app.use(express.static("client/build"));
         app.get('*', (req, res) => {
             res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
         });
       }

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);