import Autor from  '../models/User.js' ;
import path from 'path';
import fs from 'fs/promises';
// import validation from '../requests/requestUser.js';

 export default class UserController {


    async index(req , res ){

        const userModel = new Autor();

        try {

        const users = await userModel.getAllUsers();
        // res.render('user/index' , {users}) 
        res.json({users}) 


        }catch(error){
          throw error;
        }
    }



    async show(req, res) {

        const userModel = new Autor();
        const { id } = req.params; 

        try {

        const userId = parseInt(id, 10);
        const specificUser = await userModel.getUserById(userId);
        res.render('user/index', { specificUser});

        }catch(error){
          throw error;
        }

      }



      async deleteUser(req, res) {
        const { id } = req.params;
        const userModel = new Autor();
    
        try {
          // Get the root directory of your project
          const rootDir = process.cwd();
    
          // Retrieve the article by ID to get the associated photo filename
          const user = await userModel.getUserById(parseInt(id, 10));
    
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
    
          // Delete the associated image file using the filename from the article
        //   if (article.photo) {
        //     const imagePath = path.join(rootDir, 'public/uploads', article.photo);
        //     await fs.unlink(imagePath);
        //   }
    
          // Delete the article record from the database
          await userModel.deleteUser(parseInt(id, 10));
          res.send('User Deleetd Successflly');
          // res.redirect('login');
        } catch (error) {
          throw error;
        }
      }



      async showBeforeUpdate(req, res) {

        const userModel = new Autor();
        const { id } = req.params; 

        try {

        const userId = parseInt(id, 10);
        const specificUser = await userModel.getUserById(userId);
        res.render('user/editUser', { specificUser });

        }catch(error){
          throw error;
        }

      }




    //   async updateUser(req, res) {

    //     // let check = validation.validateInpute(req)

    //     // if(check.error){

    //     //   return res.status(400).render("article/editeUser", {
    //     //     'error': "please fill all the inputs"
    //     //   })

    //     // }
    //     const userModel = new Autor();
    //     const data = req.body;
    //     // const authorId = parseInt(req.body.authorId, 10);
    //     const { id } = req.params;
    //     const userId = parseInt(id, 10);
    
    //     try {
    //         const photo = req.file ? req.file.filename : null;
    
    
    //         const updatedData = {
    //              ...data,
    //             fullName: newName,
    //            email: newEmail,
    //           password: newPassword,
    //           photo: photo
    //         };
    
    //         await userModel.updateUser(updatedData);
    //         res.redirect('/user/index');
    //     } catch (error) {
    //         throw error;
    //     }
    // }



      async updateUser(req, res) {
      const userModel = new Autor();
      const data = req.body;
      const { id } = req.params;
      const userId = parseInt(id, 10);
      try {
        const photo = req.file && req.file.filename ;
 
        // // Define and assign values to newName, newEmail, and newPassword based on data from the request.
        // const newName = data.name; // Replace 'name' with the actual field name in your form.    
        // const newEmail = data.email; // Replace 'email' with the actual field name in your form.
        // const newPassword = data.password; // Replace 'password' with the actual field name in your form.
    
        const updatedData = {
          ...data,
          userId,
          photo: photo,
        };
   
        await userModel.updateUser(updatedData);
        res.redirect('/user/'+userId);
      } catch (error) {
        throw error;
      }
    }
    



    



    



 }