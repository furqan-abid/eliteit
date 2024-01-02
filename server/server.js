const app = require('./app')
require('dotenv').config({path: 'config/config.env'});


//handling uncaught exceptions
process.on('uncaughtException', function(err) {
    console.log("Error: " + err.message);
    console.log('shutting down the server due to uncaught exception')
    process.exit(1);
})


const server= app.listen(process.env.PORT,()=>{
    console.log(`server is runing on ${process.env.PORT}`);
})


//Unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})