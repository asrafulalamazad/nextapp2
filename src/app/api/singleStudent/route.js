import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function POST(req, res){
    try {
        const {searchParams}= new URL(req.url)
        const id = parseInt(searchParams.get('id'))


        const prisma =await new PrismaClient()


        const allStudent = await prisma.students.findMany(
            {
                where: {id: id},
                select: {id: true}
            }

        )
        return NextResponse.json({status: "success",data:allStudent } )
    }
    catch(e){
        return NextResponse.json({status: "Failed",data:"error"} )
    }
}
