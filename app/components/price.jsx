import { PRICE } from "@prisma/client"
function Price(price) {
    
 if(price===PRICE.CHEAP){
   return "$$"
 }
 else{
    if(price === PRICE.REGULAR){
        return "$$$"
    }
    else{
        return "$$$$$"
    }
 }
}

export default Price