const express = require("express");
const app = express();

const users = [
  // users array of objects
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

//middlewares
app.use(express.json());

// filter in js
app.get("/", function (req, res) {
  // write logic
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      // if healthy is true
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  // post request by postman later we will see how to send post request
  // write logic // here we send the data to the server by body of the request instead of query parameters
  const isHealthy = req.body.isHealthy; // it is saying undefined because of req.body so we have to use express.json() middleware
  users[0].kidneys.push({
    healthy: isHealthy, // here we are pushing the data to the server if in body isHealthy is true then it will be pushed to the server and noOfKidneys & healthyKidneys will be increased by 1 and if it is false then noOfKidneys will be increased by 1 and noOfUnhealthyKidneys will be increased by 1
  });
  res.json({
    Message: "done!",
  });
});

// put request
app.put("/", function (req, res) {
  // write logic
  if (isThereAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }
    res.json({
      msg: "all kidneys are now healthy!! done!! ",
    }); //tell the user that everything is done , if not the request will remain hung
  } else {
    res.status(411).json({
      msg: "no kidneys are unhealthy",
    });
  }
}); // here for put request also we have to check otherwise status code 411 will be sent

// delete request // removing all the unhealthy kidneys app.delete("/", function (req, res) {
// only if atleast one unhealthy kidney is there do this , else return 411
app.delete("/", function (req, res) {
  // code logic
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "done!",
    });
  } else {
    // res.sendStatus(411); // either we can send this status code or below message
    res.status(411).json({
      msg: "you have no bad kidneys",
    });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000, function () {
  // listen to port 3000
  console.log("Server is running on port 3000");
});

// only one user is here but we can do it for multiple users and frontend we can also lateron modify
