var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("hometemplate.html", "utf8");

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Dhaval Parmar</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "dhaval",
      age: "26",
    },
    {
      name: "Ronak",
      age: "26",
    },
    {
      name: "John",
      age: "29",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "",
  };
  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });