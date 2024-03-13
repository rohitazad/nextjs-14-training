
import {GetAllUsersinfo, PostUserInfo} from "../data/user";
import { NextResponse } from "next/server";


export const GET = async (req: Request, res:Response)=>{
    try {
        const userData = GetAllUsersinfo();
        return NextResponse.json({
            message:"ok",
            userDetails : userData
        },
        {
            status:200
        })
    } catch (error) {
        return NextResponse.json({
            error
        },{
            status:500
        })
    }
}


export const  POST = async (req:Request, res:Response)=>{
    try {
        const {name, age} = await req.json();
        const userData = {
            name:name,
            age:age,
            date:new Date(),
            id:Date.now().toString()
        }
        PostUserInfo(userData);
        return NextResponse.json({
            message:"ok",
            userData
        },
        {
            status:201
        })
    } catch (error) {
        return NextResponse.json({
            error
        },
        {
            status:500
        })
    }
}