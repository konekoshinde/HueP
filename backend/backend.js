import mongoose from 'mongoose'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({path:'./config.env'})


const app = express();


const password=encodeURIComponent(process.env.PIN);
const username=process.env.USER;
const port=process.env.PORT;

const monogurl=`mongodb+srv://${username}:${password}@project.fydq935.mongodb.net/?retryWrites=true&w=majority`

const connect = async () => {
  try {
    const conn = await mongoose.connect(monogurl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

connect();
console.log(`listening on ${port}`);

const schema = new mongoose.Schema({ 
  colors: {type:Array,required:true} 
});

const Palette = mongoose.model('Palette', schema);
const Site= mongoose.model('Site',schema);

app.use(express.json());
app.use(cors());

app.post("/palette", async (req, res) => {
  try{
  if(req.body.action==="find"){
    console.log(req.body.current)
    let result = await Palette.find({ colors:req.body.current }).exec();

    res.status(201).json(result); 
    
  }
  else{
    console.log(req.body.colors);
    const find= await Palette.findOne({colors:req.body.colors}).exec();
    if(find){
      res.status(201).json("ok");
    }
    else{
      const newPalette = new Palette({ colors: req.body.colors });
        let result = await newPalette.save();
        result = result.toObject();
        res.status(201).json(result);
    }


  }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "An error occurred" }); 
  }
});

app.post("/site", async (req, res) => {
  try {

    if(req.body.action==="find"){
      let result = await Site.find({ colors:req.body.current }).exec();
      console.log(result);
      res.status(201).json(result); 
    }
    else{
      const find= await Site.findOne({colors:req.body.colors}).exec();
      if(find){
        res.status(201).json("OK");
      }
    else{
      const newPalette = new Site({ colors: req.body.colors });
        let result = await newPalette.save();
        result = result.toObject();
        res.status(201).json(result);
    }
    }

	
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "An error occurred" }); 
  }
});




app.listen(port);
