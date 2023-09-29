import { errorhandler } from "./middleware/error"
import * as jose from "jose"

export default async function middleware(request){
            
                   const bearetoken=request.headers.get("authorization")
console.log("this is",bearetoken)
   
    if(!bearetoken){
        return errorhandler(400,"not contain")
    }
    const secret = new TextEncoder().encode(process.env.JWT_SECREAT);
   try{
   const hlo= await jose.jwtVerify(bearetoken,secret);
   console.log(hlo)
   }
   catch{
    return errorhandler(400,"not matched")
   }
  
}
export const config={
    matcher:["/api/authapi/me"]
}