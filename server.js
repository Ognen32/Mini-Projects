import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url'; 

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let posts = [];


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));


app.get("/", (req, res) => {
if (posts.length > 0) {

    res.render(`${__dirname}` + "/views/index.ejs", {
        post: posts
    });
}
else res.render(`${__dirname}` + "/views/index.ejs");

})


app.post("/", (req,res) => {
    const current_post = {
        Title: req.body.fTitle,
        Message: req.body.fMessage
    }
    posts.push(current_post)

    res.render(`${__dirname}` + "/views/index.ejs", {
        post: posts
    });

    console.log(req.body.fTitle);
})


app.get("/deleted", (req, res) => {
    const indexx = req.query.fPosition;
    posts.splice(indexx,1);
    console.log(posts.length);
    res.redirect("/")
});


app.post("/text-edit", (req,res) => {
    const indexxx = req.body.fMessageEditIndex;
    posts[indexxx].Message = req.body.fMessageEdit;
    console.log(posts[indexxx].Message);
    res.redirect("/");
})

app.listen(port, () => {
console.log(`Server is on ${port}`);
});