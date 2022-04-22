import fs from 'fs';
import sharp from 'sharp';

const resize =  async  (  
    path: string,
    filename: string,
    height: string,
    width: string
  ):Promise<void> => {
  
    if(!fs.existsSync('./resizedImage/')) {
      fs.mkdirSync('./resizedImage/')
  
    }
     await sharp(path)
      .resize(Number(width), Number(height))
      .toFile('./resizedImage/' + filename + '_' + height + '_' + width + '.jpg') 
  }

  export default resize ;
  