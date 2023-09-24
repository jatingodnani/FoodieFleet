import Image from 'next/image'
import fullstar from "../../public/icons/full-star.png"
import empty from "../../public/icons/empty-star.png";
import halfstar from "../../public/icons/half-star.png"

function Star({eachresto}) {
  
  const reviewTotal = eachresto.review.reduce(
    (accumulator, currentValue) => accumulator + currentValue.rating,
    0
  );

  const review = reviewTotal / eachresto.review.length;
  
  const stars=[];
  
  for(let i=0;i<Math.floor(review);i++){
   stars.push(fullstar)
   
  }
  if(0<Math.ceil(review)-review && Math.ceil(review)-review<1){
   
    stars.push(halfstar)
  }
  while (stars.length < 5) {
    stars.push(empty); 
  }

  

 return<div className='flex w-[20px] justify-between'>
  {
    stars.map((each,index)=>(<Image key={index}  width={300}
      height={300} src={each.src} alt=""/>))
  }
 </div>
}

export default Star