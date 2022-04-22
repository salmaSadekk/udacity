import express, { Request, Response } from 'express';
import { resolve } from 'path';
import routes from './routes/routes';

const app = express();
const port = 3000;

app.use('/api', routes , (req : Request, res : Response) : void=>{
  
  res.send('Image processing application');
});
app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});
/*
app.get('/api', function(req, res) {
  console.log('Home Page!');
  res.send('Image processing application');
}); */
//Middleware
/*
app.use((req, res) => {
  console.log(res.status);
  res
    .status(400)
    .send(
      ' wrong route. Correct route is  http://localhost:3000/api/images?filename=<imagaeName>&width=<required width>&height= <requiredHeight>'
    );
});  */

export default app;
