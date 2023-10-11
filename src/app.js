const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();




app.use(express.json());
const bodyParser = require('body-parser');
app.use('/uploads', express.static('uploads'));



// Configure body-parser to handle URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",async(req,res)=>{
    const allUsers= await prisma.author.findMany();
    res.json(allUsers);
});




const multer  = require('multer')



// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded file
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage });


app.post('/update/:id', upload.single('avatar'), async (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPassword = req.body.password;

  // Check if a file is uploaded
  if (req.file) {
    const filename = req.file.filename;
    // If a file is uploaded, update the avatar
    const updatedUser = await prisma.author.update({
      where: { id: parseInt(id) },
      data: {
        fullName: newName,
        // Use the filename of the uploaded file as the avatar
        photo: filename,
        email: newEmail,
        password: newPassword,
      },
    });
  } else {
    // If no file is uploaded, only update the other fields
    const updatedUser = await prisma.author.update({
      where: { id: parseInt(id) },
      data: {
        fullName: newName,
        email: newEmail,
        password: newPassword,
      },
    });
  }

  res.send('File uploaded successfully.');
});














app.post("/",async(req,res) => {
      const newUser = await prisma.author.create({data: req.body});
      res.json(newUser);

  });

//    app.post("/update/:id",async(req,res)=>{
//     const id=req.params.id;

//     const newName=req.body.name;
//     const newPhoto="kerkerkjejkrjkejkr";
//     const newEmail=req.body.email;

//     const newPassword=req.body.password;
    
    
//     const updatedUser= await prisma.author.update({
//         where:{id: parseInt(id)},
//         data:
//         {
//          fullName:newName,
//          photo:newPhoto,
//          email:newEmail,
//          password:newPassword, 
//         }
//     });
//      res.send("User Updated Successeffly");
// });

app.post("/deleteUser/:id",async(req,res)=>{
    const id=req.params.id;

    const deletedUser= await prisma.author.delete({
        where: {id:parseInt(id)},
    });
    res.send("User deleted successffly");
});
app.get("/getUser/:id", async (req, res) => {
    const id = req.params.id;

        let specificUser = await prisma.author.findUnique({
            where: { id: parseInt(id) }});

            res.render('home.ejs',{specificUser}); // Remove the leading slash before 'home.ejs'

            // res.json(specificUser);
   
});

app.get("/editUser/:id", async (req, res) => {
    const id = req.params.id;
     let specificUser = await prisma.author.findUnique({
            where: { id: parseInt(id) }});

            res.render('editUser.ejs',{specificUser}); // Remove the leading slash before 'home.ejs'

            // res.json(specificUser);
   
});



// app.get("/showUsers", async (req, res) => {
//     res.render('home.ejs'); // Remove the leading slash before 'home.ejs'
// });

app.listen(3301,()=>{console.log('Server Running on port 3301')});

