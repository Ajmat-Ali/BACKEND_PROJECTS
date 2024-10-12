const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());

// --------------------------------------------------------- Uploading File Logic ------------------------------------------

const FileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "allUploadedFile");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileUpload = multer({ storage: FileStorage });

// ----------------------- Joining static file -------------------------------------
app.use(express.static(path.join(__dirname, "public")));

// ----------------------- GET (/) ------------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// ----------------------- POST (/submit-form) -------------------------------------
app.post("/submit-form", fileUpload.single("file"), (req, res) => {
  console.log(req.body);

  console.log("Name : " + " - " + req.body.userName);
  console.log("Age : " + " - " + req.body.age);
  console.log("file : " + " - " + req.file.toString());

  res.send(`<div> 
        <h2>"File Uploaded Successfully"</h2>
        <h3>"NAME : ${req.body.userName}"</h3>
        <h3>"AGE : ${req.body.age}"</h3>
        <h3>"File : ${req.file.toString()}"</h3>
        <a href='http://localhost:3001'> <button>OK</button> </a>
        
        </div>`);
});

// ------------------------------------------------------ Downloading File Logic -------------------------------------------

// ----------------------- GET (/download/:filename) -------------------------------------
app.get("/download/:filename", (req, res) => {
  const filePath = path.join(
    __dirname,
    "./allUploadedFile",
    req.params.filename
  );
  if (fs.existsSync(filePath)) {
    const downloadableFile = fs.createReadStream(filePath);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${req.params.filename}"`
    );
    downloadableFile.pipe(res);
  } else {
    res.status(404).send("File Not Found");
  }
});

// ----------------------------------------------------- Starting Server ---------------------------------------------------

app.listen(3001, () => {
  console.log("Server is Listening to http://localhost:3001");
});
