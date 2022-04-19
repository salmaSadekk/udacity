import express from "express";
import sharp from 'sharp' ;
import {promises as fspromises } from 'fs' ;
import path from 'path';
import fs from 'fs' ;


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
  

  // if (file!= null && width!= null && !isNaN(Number(width) ) && !isNaN(Number(height) ) && height != null) {
    if (file== null || width== null || height == null) {
      res.send("missing parameter ")
    }

  else    if ( isNaN(Number(width) ) || isNaN(Number(height) )) {
      res.send(" size parametres [width / height] in wrong format. should be Numbers")
    }
    
    else if (!fs.existsSync('./images/' + file + ".jpg" )) {
      res.send("404 not found. The resource you are looking for doesn't exist")
    }
    
   else{
  console.log( isNaN(Number(width) ) )
  
    var path_ = './images/' + file + ".jpg";

    console.log(path_)
    console.log("testt")
     
    await resize(path_, file as string , height as string   , width as string ) 
   
   console.log(path.resolve(__dirname, '../../../resizedImage/' + file + "_" + height + "_"  + width  + ".jpg"))
    
   await res.sendFile (path.resolve(__dirname, '../../../resizedImage/' + file + "_" + height + "_"  + width  + ".jpg") )
}
   
   

  }
    catch(err) {
      console.log(err)
      console.log("saaad")


    }
   



   });

export default images ;

