var express = require("express");
    app = express();
    bodyParser = require("body-parser");
    // Set the port of our application
    // process.env.PORT lets the port be set by Heroku
    PORT = process.env.PORT || 8080;

    //create application/json parser
    jsonParser = bodyParser.json()

    //create application
    urlencodedParser = bodyParser.urlencoded({ extended: false });
    app.use(bodyParser.json({type: 'application/*+json'}));
    app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));
    app.use(bodyParser.text({type: 'text/html'}))
    app.listen(PORT,function(){
        console.log("App listening on PORT:" + PORT);
    });