import express, { Request, Response } from 'express';
import { promises as fspromises } from 'fs';
import path from 'path';
import fs from 'fs';
import resize from '../../function/resize';

 

const images = express.Router();
images.get('/images', async (req : Request, res : Response)  :Promise<void>=> {
  try {
    const file = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;

    // if (file!= null && width!= null && !isNaN(Number(width) ) && !isNaN(Number(height) ) && height != null) {
    if (file == null || width == null || height == null) {
      res.send('missing parameter ');
      return;
    } else if (isNaN(Number(width)) || isNaN(Number(height))) {
      res.send(
        ' size parametres [width / height] in wrong format. should be Numbers'
      );
      return ;
    } else if (!fs.existsSync('./images/' + file + '.jpg')) {
      res.send("404 not found. The resource you are looking for doesn't exist");
      return ;
    } else {
      const path_ = './images/' + file + '.jpg';

     if (fs.existsSync('./resizedImage/' + file + '_' + height + '_' + width + '.jpg')){
      res.sendFile(
        path.resolve(
          __dirname,
          '../../../resizedImage/' + file + '_' + height + '_' + width + '.jpg'
        )
      );

      return ;
     }
 
      await resize(path_, file as string, height as string, width as string);

       res.sendFile(
        path.resolve(
          __dirname,
          '../../../resizedImage/' + file + '_' + height + '_' + width + '.jpg'
        )
      );
    }
  } catch (err) {
    console.log(err);
  }
});

export default images;
