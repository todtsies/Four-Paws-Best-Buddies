import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
// import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'
import { CONNECTION_URL } from './config/dev.js';

const app = express();
// dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,
    { useNewUrlParser: true,
    useUnifiedTopology: true
    })
    mongoose.connection.on('connected',()=>{
        console.log('conneted to db')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('err connecting', err)
    })

    if (process.env.NODE_ENV === "production") {
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