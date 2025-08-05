const { Router } = require("express"); 

const indexRouter = Router(); 
let id = 3; 
const messages = [
  {
    id: 1, 
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2, 
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages})
})

indexRouter.get("/new", (req, res) => {
    res.render("form")
})

indexRouter.post("/new", (req, res) => {
  messages.push({ id: id, text: req.body.msg, user: req.body.author, added: new Date() });
  res.redirect("/"); 
  id++; 
})

indexRouter.get("/:postId", (req, res) => {
  const postId = parseInt(req.params.postId); 
  const post = messages.find((msg) => postId === msg.id); 

  if (!post) {
    return res.status(404).render("404", { error: "Post not found" });
  }

  res.render("post", { post: post });
});

module.exports = indexRouter;