// Create web server

const express = require('express');
const router = express.Router();
const commentController= require('../controllers/comment.js')
const app = express();
const PORT = 3000

router.get('/',commentController.commentList)


app.use(router);

app.listen(PORT,function(err){
    if (err){
        console.log(err)
    }
    console.log("Sever Listening on PORT: ",PORT)
})
