let args = process.argv.slice(2,3);
console.log(args)

const request = require('request');
const fs = require('fs');



request(args[0], (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); 
  write(body)
});

const write= (body) =>{
  fs.writeFile('pagefetcher.txt', `${body}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}
