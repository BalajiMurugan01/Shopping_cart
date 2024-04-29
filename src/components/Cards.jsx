import { useState } from "react";

export  default function Cards({data ,setCount , count , setCart , cart}){
    
    return(
        <div className="flex flex-row place-content-evenly flex-wrap gap-8">
            {data && (
        <>
          {data?.map((val, idx) => (
            <Card val={val} key={idx} setCount={setCount} count={count} setCart={setCart} cart={cart} />
          ))}
        </>
      )}
        </div>
    );
} 
export function Card({val , setCount ,count , setCart ,cart }){
    const [show , setShow] = useState(true);
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src= {val.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{val.product}</h2>
    <p>{val.cost}</p>
    <div className="card-actions">
        {show ? (<>
            <button className="btn btn-primary" onClick={()=>{setShow(!show);setCount(count+1);setCart([...cart,val.product])}} >Add to cart</button>
        </>):(<>
            <button className="btn btn-primary" onClick={()=>{setShow(!show);setCount(count-1);setCart(cart.filter((item)=>item !== val.product))}} >remove from cart</button>
        </>)}
      
    </div>
  </div>
</div>
    );
}
