var counter = 1;

var limit = 50;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div');
         var textInput = document.getElementById("divName");
          newdiv.innerHTML = "Bookmark " + (counter + 1) +" <br><input type='text' id='textInput' name='textname'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;

     }
 }

function addInput(text){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('p');
         var textInput = document.getElementById("divName");

         var replacedText, replacePattern1, replacePattern2, replacePattern3;

     //URLs starting with http://, https://, or ftp://
     replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
     replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

     //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
     replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
     replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

     //Change email addresses to mailto:: links.
     replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
     replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');


          newdiv.innerHTML = "Link" + (counter + 1) +" <br><input type='text' id='textInput' name='textname'>";
          document.getElementById("textInput").appendChild(newdiv);
          counter++;


 }
  function convert()
      {
  	  var text=document.getElementById("textInput").value;
  	  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  	  var text1=text.replace(exp, "<a href='$1'>$1</a>");
  	  var exp2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
  	  document.getElementById("converted_url").innerHTML=text.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');

}

function urlconv()
{
  newlink = document.createElement('a');
  newlink.setAttribute('class', 'signature');
  newlink.setAttribute('href', 'showSignature(xyz)');



}


function showSignature(){

           var replacedText, replacePattern1, replacePattern2, replacePattern3;

       //URLs starting with http://, https://, or ftp://
       replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
       replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

       //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
       replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
       replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

       //Change email addresses to mailto:: links.
       replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
       replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
       return replacedText;


      }

      function eraseText() {
    document.getElementById("textInput").value = "";
}



      function converting()
          {
      	  var text=document.getElementById('textInput').value;
      	  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
      	  var text1=text.replace(exp, "<a href='$1'>$1</a>");
      	  var exp2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
      	  //document.getElementById("converted_url").innerHTML=text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
          var para = document.createElement("P");
              var t = document.createTextNode(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
              para.appendChild(t);
              // document.body.appendChild(para);
                document.body.appendChild(para);



          }





function decode(){
//  url = string(text);
//  replaceURLWithHTMLLinks(url);
  // window.open('www.example.com/print/example.html').print();
  //print(url);

    var x = document.getElementById("textInput").value;
    url = string(x);
    //document.getElementById("href ").innerHTML = "You wrote: " + url;
    document.getElementsByTagName('textInput')[0].innerHTML += '<a href="url">'+x+'</a>';

}
function replaceURLWithHTMLLinks(url) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
    return text.replace(exp,"<a href='$1'>$1</a>");
}










var http = require('http') // http module
  , fs = require('fs')  // file system module
  , qs = require('qs'); // querystring parser

      // store the contents of 'index.html' to a buffer
      var html = fs.readFileSync('./newindex.html');

      // create the http server
      http.createServer(function (req, res) {

        // handle the routes
        if (req.method == 'POST') {

          // pipe the request data to the console
          req.pipe(process.stdout);

          // pipe the request data to the response to view on the web
          res.writeHead(200, {'Content-Type': 'text/plain'});
          console.log(req.body)
          req.pipe(res);

        } else {

          // for GET requests, serve up the contents in 'index.html'
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(html);
        }

      }).listen(3000);
