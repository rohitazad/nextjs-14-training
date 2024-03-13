import { NextResponse } from "next/server";
import {getUserById, userUpdateById,userRemoveById} from '../../data/user';

export const GET = async(req:Request, res:Response)=>{
    try {
        const id =  req.url.split('user/')[1];
        const userDetail = await getUserById(id);
        return NextResponse.json({
            message:"ok",
            userDetail
        },
        {
            status:200
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

export const PUT = async(req:Request, res:Response)=>{
    try {
        const id =  req.url.split('user/')[1];
        const {name, age} = await req.json();
        userUpdateById(id, name, age);
        const userDetail = await getUserById(id);
        return NextResponse.json({
            message:"ok",
            res:"user data succeffuly udpated",
            userDetail
        },
        {
            status:500
        })
    } catch (error) {
        return NextResponse.json({
            error
        },{
            status:500
        })
    }
}

export  const DELETE = async (req:Request)=>{
    try {
        const id =  req.url.split('user/')[1];
        userRemoveById(id);
        return NextResponse.json({
            message:"ok",
            res:"user info RemoveSucces fully"
        })
    } catch (error) {
        return NextResponse.json({
            error
        },{
            status:500
        })
    }
}