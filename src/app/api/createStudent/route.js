

import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res){
    try {
        const reqBody= await res.json()
        const prisma =await new PrismaClient()
        const newStudent = await prisma.students.create({
            // data: reqBody
            data: {
                first_name:reqBody["first_name"],
                last_name:reqBody["last_name"],
                age:reqBody["age"],
                grade:reqBody["grade"],
                courses:reqBody["courses"]
            }
 })
        return NextResponse.json({status: "success",data:newStudent } )
    }
    catch(e){
        return NextResponse.json({status: "Failed",data:"error"} )
    }
}
