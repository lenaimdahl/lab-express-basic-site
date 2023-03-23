app.get("title", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.get("work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

app.use(express.static(__dirname + "/public"));
