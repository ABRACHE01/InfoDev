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

    static async login(email){
        const author = await prisma.author.findUnique({
            where : {
                email : email,
            },
            select : {
                id : true,
                email : true,
                password : true,
            },
        })

        return author;
    }

    static async getAuthor(id){
        
        const author = prisma.author.findUnique({
            where : {
                id : parseInt(id)
            }
        })

        return author;
    }
}