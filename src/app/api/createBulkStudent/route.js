

import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res){
    try {
        const reqBody= await res.json()
        const prisma =await new PrismaClient()
        const newStudent = await prisma.students.createMany({
            data: [reqBody]

        })
        return NextResponse.json({status: "success",data:newStudent } )
    }
    catch(e){
        return NextResponse.json({status: "Failed",data:"error"} )
    }
}
