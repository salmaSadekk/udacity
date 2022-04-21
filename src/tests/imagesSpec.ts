import supertest from "supertest";
import images from "../routes/api/images";
import resize from "../routes/api/images";
const request = supertest(images);

describe("endpoint test " , () =>{
    it(" endpoint: get /api/images with all parameters [ filename, height,width]" , async()=>{
        const response = await request.get('/api/images?filename=fjord&width=200&height=230');
        expect(response.status).toBe(200);
     

    })
}
)