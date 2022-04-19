import express from "express";
import sharp from 'sharp' ;
import {promises as fspromises } from 'fs' ;
import path from 'path';


async function resize   (path : string  , filename :string, height :string , width :string  )  {
  
  const info = await  sharp(path)
  
    .resize( Number(width)  , Number (height)  )
    .toFile(
        "./resizedImage/"  + filename + "_" + height + "_"  + width  + ".jpg"
    )
    
}

const images = express.Router() ;
images.get('/images', async (req, res) => {
  try{
    const file  = req.query.filename ; 
   const width = req.query.width ; 
   const height =req.query.height ; 

   //res.send('images resize route');

   //if (file!= null && width!= null && height != null)
   

    var path_ = './images/' + file + ".jpg";

    console.log(path_)
    console.log("testt")
     
    await resize(path_, file as string , height as string   , width as string ) 
   
   console.log(path.resolve(__dirname, '../../../resizedImage/' + file + "_" + height + "_"  + width  + ".jpg"))
    
   await res.sendFile (path.resolve(__dirname, '../../../resizedImage/' + file + "_" + height + "_"  + width  + ".jpg") )
  

   
   

  }
    catch(err) {
      console.log(err)
      console.log("saaad")


    }
   
   //console.log(path)
   
//resize(path ) ;



   });

export default images ;

