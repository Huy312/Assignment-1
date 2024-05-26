/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Huy Manh Le (Thomas Le) Student ID: hle37 Date: 2024/05/21
*
********************************************************************************/ 

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]
var serverResponses = ["Welcome to WEB700 Assignment 1",
    "This course name is WEB700. This assignment was prepared by Huy Manh Le",
    "hle37 Huy Manh Le",
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function httpRequest(httpVerb, path) {
    var index_path = serverPaths.indexOf(path)

    if (index_path != -1 && httpVerb === serverVerbs[index_path]) 
        return serverResponses[index_path]
    return "404: Unable to process " + httpVerb + " request for " + path
}

function automateTests() {
    function randomRequest() {
        testVerbs = [...new Set(serverVerbs)]
        testPaths = [...serverPaths]
        testPaths.push("/randomPath1", "/randomPath2")
        randVerb = getRandomInt(testVerbs.length)
        randPath = getRandomInt(testPaths.length)

        console.log(httpRequest(testVerbs[randVerb], testPaths[randPath]))
    }

    setInterval(randomRequest, 1000)
}

automateTests()