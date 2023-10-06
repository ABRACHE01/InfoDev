import { seeders } from "./seeders/factory.js"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    for(let seeder in seeders){
        await prisma[seeders[seeder].model].createMany({
            data : seeders[seeder].data
        })
    }
}

main().catch(e=>{
    console.log(e);
    process.exit(1);
}).finally(()=>{
    prisma.$disconnect();
})