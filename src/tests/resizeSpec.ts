import resize from '../function/resize'
import imageSize from 'image-size';
const { promisify } = require('util') ;
import fs from 'fs' ;
import sharp from 'sharp';
describe('test that the file gets created', () => {
    it('testing that file gets created', async() =>{
        if( fs.existsSync('./resizedImage/palmtunnel_200_200.jpg')) {
          fs.unlinkSync('./resizedImage/palmtunnel_200_200.jpg')  
        }
    await resize('./images/palmtunnel.jpg','palmtunnel',"200","200")
    const res = fs.existsSync('./resizedImage/palmtunnel_200_200.jpg')
    
    expect(res).toBeTrue()


    });
  
  });
  