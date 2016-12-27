var counter = 1;

var limit = 50;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
         textInput = document.getElementById("divName");
          newdiv.innerHTML = "Bookmark " + (counter + 1) +" <br><input type='text' id='textInput' name='textname' oninput='convert()'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;

     }
 }


  function convert()
      {
  	  var text=document.getElementById("textInput").value;
  	  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  	  var text1=text.replace(exp, "<a href='$1'>$1</a>");
  	  var exp2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
  	  document.getElementById("converted_url").innerHTML=text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
      } 



//
// function decode(){
// //  url = string(text);
// //  replaceURLWithHTMLLinks(url);
//   // window.open('www.example.com/print/example.html').print();
//   //print(url);
//
//     var x = document.getElementById("textInput").value;
//     url = string(x);
//     //document.getElementById("href ").innerHTML = "You wrote: " + url;
//     document.getElementsByTagName('textInput')[0].innerHTML += '<a href="url">'+x+'</a>';
//
// }
// function replaceURLWithHTMLLinks(url) {
//     var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
//     return text.replace(exp,"<a href='$1'>$1</a>");
// }
//
//
//
//
//
//
//
//
//
//
// var http = require('http') // http module
//   , fs = require('fs')  // file system module
//   , qs = require('qs'); // querystring parser
//
//       // store the contents of 'index.html' to a buffer
//       var html = fs.readFileSync('./newindex.html');
//
//       // create the http server
//       http.createServer(function (req, res) {
//
//         // handle the routes
//         if (req.method == 'POST') {
//
//           // pipe the request data to the console
//           req.pipe(process.stdout);
//
//           // pipe the request data to the response to view on the web
//           res.writeHead(200, {'Content-Type': 'text/plain'});
//           console.log(req.body)
//           req.pipe(res);
//
//         } else {
//
//           // for GET requests, serve up the contents in 'index.html'
//           res.writeHead(200, {'Content-Type': 'text/html'});
//           res.end(html);
//         }
//
//       }).listen(3000);
