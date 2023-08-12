import dbConnect from "@/config/dbConnect";
import User from "@/models/user";
import { NextRequest , NextResponse} from "next/server";


dbConnect();

export async function GET(request) {
    // const {method} = req;

    // switch(method){
        // case 'GET':
            try{
                const user = await User.find();
                return NextResponse.json({ status:200,data: user })
                // res.status(200).json({success : true, data: user});
            }catch( error ){
                // res.status(400).json({success : false});
            }
    // }
}