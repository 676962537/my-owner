var express  = require("express")
var app = express();
app.use(express.static('dist'))
console.log("请确保已经执行 npm run build 打包生产环境文件");
app.get("/",(req,res) => {
  var options = {
    root: __dirname + '/dist/'
  };
  res.sendFile("index.html", options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('successful');
    }
  });
})
app.listen(3005,() => {
  console.log("listening 3005.....")
});

