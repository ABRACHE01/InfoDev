// const express = require("express");
// const app = express();
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
// app.use(express.json());

// app.get("/",async(req,res)=>{
//     const allUsers=prisma.author.findMany();
//     res.json(allUsers);
// });
// app.post("/",async(req,res)=>{
//     const newUser=prisma.author.create({data: req.body});
//     res.json(newUser);
// });

// app.put("/:id",async(req,res)=>{
//     const id=req.params.id;
//     const newPhoto=req.body.photo;
//     const newEmail=req.body.email;
//     const newPassword=req.body.password;
    
//     const updatedUser=prisma.user.update({
//         where:{id: parseInt(id)},
//         data:
//         {photo:newPhoto,
//          email:newEmail,
//          password:newPassword, 
//         }
//     });
//     res.json(updatedUser);
// });

// app.delete("/:id",async(req,res)=>{
//     const deletedUser=prisma.user.delete({
//         where: {id:parseInt(id)},
//     });
//     res.json(allUsers);
// });

// app.listen(3301,()=>{console.log('Server Running on port 3301')});

