import supertest from "supertest";
import app from '../index'
const request = supertest(app);


describe("endpoint test " , () =>{
    it(" endpoint: get /api should return 200" , async()=>{
 
        const response = await request.get('/api');
        expect(response.status).toBe(200);
      // done();

    })
}
)