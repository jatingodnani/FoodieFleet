import { SignJWT, JWT } from 'jose';
import { cookies } from 'next/headers';
export const jwttoken = async (email) => {
  

  const secret = new TextEncoder().encode(process.env.JWT_SECREAT)
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
   
    .setExpirationTime('24h')  // Adjust the expiration time as needed
    .sign(secret);


  return token;
};

export const cookieSetter=(token,set)=>{

    cookies().set({
       name:"jwt-token",
      value:set?token:"",
  
      maxAge:set?15*24*60*60*1000:0,
     }
     
     )
    }
     