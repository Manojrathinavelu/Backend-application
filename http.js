import http from 'http';

http.createServer(function (req, res) {
  console.log("Node server created successfully...");
  console.log(req.url)


  // var url = req.url;
  //   var method = req.method

  //   if(method === "GET" && url == " /blogAllpost"){
  //     res.write("Get method run successfully");
  //   }
  // res.end();
}).listen(8000);

http.createServer((req,res)=>{
  console.log("server running at 8000");
  res.write("Server started");
  var url = req.url;
  var method = req.method;
  console.log(url);
  console.log(method);

  if(method === "GET" && url == "/getall"){
    console.log("GET method run successfully");
  }
  res.end();
}).listen(8000);

// if(method === "POST" && url == "/blogAllpost"){
//   res.write("Post method run successfully");
// }