import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthModel{

    constructor(fullName, photo, email, password) {
        this.fullName = fullName;
        this.photo = photo;
        this.email = email;
        this.password = password;
    }

    async register(){
        const author = await prisma.author.create({
            data : {
                fullName : this.fullName,
                photo : this.photo,
                email : this.email,
                password : this.password
            }
        })

        return author;    
    }

    static async login(email, password){
        
    }
}