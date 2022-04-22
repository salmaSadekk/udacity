"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', routes_1.default, function (req, res) {
    res.send('Image processing application');
});
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
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
exports.default = app;
