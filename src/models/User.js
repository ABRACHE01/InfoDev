import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default class User {

    async getAllUsers(){
        try{
          return await prisma.author.findMany();
        }catch(error){
          throw error;
        }
      }






      async getUserById(id){
        try{
        return await prisma.author.findUnique({
          where : {id}, 
       
        })
      }catch(error){
        throw error;
      }
       }



       async deleteUser(id){
        try {
          return await prisma.author.delete({
            where : {id}, 
          });
           
        } catch (error) {
          throw error;
        }  
      }



      async updateUser(data) {
        // return await console.log(data)

        
        const { userId ,name,email,password, photo} = data;

        try {
          return await prisma.author.update({
            where: { id: userId },
            data: {
              fullName:name,
              email: email,
              password: password,
              photo: photo 
            },
            
          });
        } catch (error) {
          throw error;
        }
      }


}