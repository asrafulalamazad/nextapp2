import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req,res){
    try {
        const {searchParams}= new URL(req.url)
        const id = parseInt(searchParams.get('id'))

        const prisma =await new PrismaClient()

        const deleteStudent = await prisma.students.delete({
          where: {id:id},
        })
        return NextResponse.json({status: "success",data:deleteStudent } )
    }
    catch(e){
        return NextResponse.json({status: "Failed",data:"error"} )
    }
}
