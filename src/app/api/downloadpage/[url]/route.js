import {getDownloadPage } from "@/app/lib/downloadpage";
import { convertToJson } from "@/app/middleware/convertToJson";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req,{params}) => {
    try{
        const url=params.url
        console.log('download api',url)
        const downloadpage=await getDownloadPage(url)
        return NextResponse.json(downloadpage,{status:200})
    }
    catch(error){
          console.log(error)
          return NextResponse.json({message:"Internal Server Error"},{status:500})
    }
};
