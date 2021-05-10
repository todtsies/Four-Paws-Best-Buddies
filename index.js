import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { MONGODB_URI } from './config/dev.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

const __dirname = dirname(fileURLToPath(import.meta.url)); 

if (process.env.NODE_ENV === "production") {
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
      mongoose.set('useFindAndModify', false);
      
      app.use(express.static("client/build"));
      app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

      });
    }   

    // else {
    //       mongoose.connect(MONGODB_URI,
    //           { useNewUrlParser: true,
    //           useUnifiedTopology: true
    //            })
    //            mongoose.connection.on('connected',()=>{
    //                console.log('connected to db')
    //            })
    //            mongoose.connection.on('error',(err)=>{
    //                console.log('err connecting', err)
    //            })
    //            mongoose.set('useFindAndModify', false);
    //      }

    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))

// mongoose.connect(MONGODB_URI || 'mongodb://localhost/fourpaws', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));


