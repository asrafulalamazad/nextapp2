import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res){
    try {
        const {searchParams}= new URL(req.url)
        const id = parseInt(searchParams.get('id'))
        const reqBody= await req.json();

        const prisma =await new PrismaClient()

        const updateStudent = await prisma.students.update({
            where: {id:id},
            data: reqBody
        })
        return NextResponse.json({status: "success",data:updateStudent } )
    }
    catch(e){
        return NextResponse.json({status: "Failed",data:"error"} )
    }
}
