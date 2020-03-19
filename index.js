require('dotenv').config(); // This sets the port dynamically
const server = require("./api/server.js");

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


// CI/CD pipeline stages:
// * development (dev)
// * test 
// * staging 
// * --- manual gate (a gate blocks prgress, it's a stop) (how Kirkby's office works)
// * production 


///////// Also look into auto generating a .gitignore file

// Setting the PORT with command line commands overrides what the env file is doing. 
// export PORT=4004 to set port value in the command line
// unset PORT, set PORT=4004, 