import Autor from  '../models/User.js' ;
import path from 'path';
import fs from 'fs/promises';

  class UserController {



    async show(req, res) {

        const userModel = new Autor();
        const { id } = req.params; 

        try {

        const userId = parseInt(id, 10);
        const specificUser = await userModel.getUserById(userId);
        res.render('user/index', { req , specificUser});

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
          // res.send('User Deleetd Successflly');
          res.redirect('/logout');
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
        res.render('user/editUser', {req, specificUser });

        }catch(error){
          throw error;
        }

      }

      async updateUser(req, res) {
      const userModel = new Autor();
      const data = req.body;
      const { id } = req.params;
      const userId = parseInt(id, 10);
      try {
        const photo = req.file && req.file.filename ;
 
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

 export {UserController}