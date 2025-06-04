import axios from "axios";
import { User } from "@/interface";

export async function sendMessage(params:User){
    try{
        const {data} = await axios.post(`${process.env.BACKENDLESS_API}/post`,{
            name:params.name,
            email:params.email,
            message:params.message,
        });
    }catch(err){
        throw err;
    }
}

