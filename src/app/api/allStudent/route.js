import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res){
    try {
        const prisma = new PrismaClient()
        const newStudent = await prisma.students.create({
            data: {
                first_name: 'Jhon91@gmail.com',
                last_name: '123',
                age: '123',
                grade:{


                    create:{
                        firstName:"Jhon",
                        lastName:"De",
                        mobile:"01700000000",
                        city:"Dhaka"
                    }
                }
            },
        })
        return NextResponse.json({newUser})




        return NextResponse.json({name: "azad"})
    }
    catch (e) {
        return NextResponse.json({data: e})

    }

}