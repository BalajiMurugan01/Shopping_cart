export default function Header({data ,cart}){
    return(
        <div className="flex w-full navbar bg-base-300 rounded-lg p-2 border-2 border-slate-700">
        <div className="flex gap-2">
          <a className="btn btn-ghost text-3xl ">PORSCHE</a>
          <button className="btn bg-base-300 border-none text-xl">Home</button>
          <button className="btn bg-base-300 border-none text-xl">Updates</button>
          <button className="btn bg-base-300 border-none text-xl">shop</button>
        </div>
        <div className="flex w-full justify-end ">
        <div className="dropdown dropdown-end rounded-lg">
  <div tabIndex={0} role="button" className="btn m-1 text-xl ">Cart {data}</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-4 text-l">
    {cart && (<>
    {cart?.map((val,idx)=><CartButton data={val} key={idx}/>)}
    </>)}
  </ul>
</div>
        </div>
         </div>  
    );
}

export function CartButton({data}){
  return(
   
           <li>{data}</li>

  )
}