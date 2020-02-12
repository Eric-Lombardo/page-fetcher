// get request library from npm
const request = require("request");

// get fs library
const fs = require("fs");

// only get the arguments the user inputted
const userInput = process.argv.splice(2);
// userinput[0] = website
// userinput[1] = local file path

// using npm request to make a GET request
request(userInput[0], (error, response, body) => {
  // console.log("Error: ", error);
  if (error) {
    console.log("the url you are trying to reach is not valid")
  }
  // console.log("Response: ", response && response.statusCode);
  if (response && response.statusCode) {
    fs.writeFile(userInput[1], body, function(err) {
      if(err) {
        return console.log(err);
      }
      const stats = fs.statSync(userInput[1]);
      const fileSizeinBytes = stats["size"]
      console.log(`Downloaded and saved ${fileSizeinBytes} bytes to ${userInput[1]}`);
    }); 
  }
  // console.log("Body: ", body);
})


