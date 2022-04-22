import supertest from 'supertest';
import app from '..';
const request = supertest(app);

describe('endpoint test /api/images', () => {
  it(' endpoint: get /api/images with all parameters [ filename, height,width]', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=233'
    );
    expect(response.status).toBe(200);
    
    });

    it(' endpoint: get /api/images with parameters [ filename ,width]', async () => {
      const response = await request.get(
        '/api/images?filename=fjord&width=200'
      ).expect('missing parameter ')
      
      
    } );
    it(' endpoint: get /api/images with wrong parameter formats for width and height[width , height]', async () => {
      const response = await request.get(
        '/api/images?filename=fjord&width=200&height=stester'
      ).expect(' size parametres [width / height] in wrong format. should be Numbers')
      
      
    } );
    it(' endpoint: get /api/images with filename not existing', async () => {
      const response = await request.get(
        '/api/images?filename=test&width=200&height=200'
      ).expect("404 not found. The resource you are looking for doesn't exist")
      
      
    } );
});

