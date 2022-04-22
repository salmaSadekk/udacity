# node-image-app

Endpoints
-----------------------
**Port used**
3000  

### -**Endpoint /api/images**    
replace the parameters between brackets   
http://localhost:3000/api/images?filename=(image_name)&width=(width_value>)&height=(height_value)

**filename [required parameter]**  
should be one of [fjord , icelandwaterfall ,palmtunnel ,santamonica ]  

**width [required parameter]**   
should be an Integer value

**height [required parameter]**  
should be an Integer value

**example**   
http://localhost:3000/api/images?filename=fjord&width=220&height=240

### -**Endpoint /api**  
Prints out application name  
http://localhost:3000/api/   

**example**   
http://localhost:3000/api 

to install dependencies
-----------------------
npm install

existing scripts Scripts:
-----------------------

**1- to build:**  
npm run build

**2- to use nodemon:**  
npm run start

**3- to run tests:**  
npm run test

**4- to use Eslint:**  
npm run linting

**5- to use prettier:**  
npm run prettier

