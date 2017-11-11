var express = require('express');
var router = express.Router();
var request = require('request');

var ConversationV1 = require('watson-developer-cloud/conversation/v1');


var fs = require('fs')


// })
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

var conversation = new ConversationV1({
  username: '', // replace with username from service key
  password: '', // replace with password from service key
  path: { workspace_id: '' }, // replace with workspace ID
  version_date: '2016-07-11'
});

router.post('/upload', function (req, res) {
  var msg = req.body;
  var created_here = "";
  console.log(msg);
  conversation.message(msg, (err, response) => {
    if (err) {
      res.send("Something went wrong");
    }
    else if (response.output.text.length != 0) {
      console.log("response ", response);
      if (response.output.nodes_visited.length !== 0) {
       
          res.status(200);
          res.send(JSON.stringify({
            "text": response.output.text,
            "context": response.context
          }))
        

      }
    }
  })
})

module.exports = router;
