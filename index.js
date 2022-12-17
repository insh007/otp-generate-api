//---------package to generate random otp--------------
//---------npm i otp-generator---------------  
const otpGen = require("otp-generator")
let otp = otpGen.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false })

//---------package to sent generate otp using third party server service (twilio)--------------
//---------npm i twilio---------------  
var sid = "ACdd0e78651b183817315cc690f75acb9a";
var auth_token = "aa86c29b632be1c36284b261fcf35a60";


var twilio = require("twilio")(sid, auth_token);

twilio.messages
    .create({
        from: "+15076370162",
        to: "+918475994428",
        body: `this is testing otp is ${otp}`,
    })
    .then( () => console.log("message has sent!"))
    .catch( (err) => console.log(err));

    
// https://www.twilio.com/
