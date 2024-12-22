export default function Collection2() {
  return (
    <div className=" w-full mb-5 ">
      <h1 className=" text-xl text-center p-2 mb-4 font-medium text-gray-950">Top Collections</h1>
      <div className=" w-full flex gap-4 ">
        <div className=" w-full relative"> 
          <img src="https://enterprise-theme-digital.myshopify.com/cdn/shop/products/Ignite2-Beauty-black_2_Lo_EDIT_C.jpg?v=1676026193&width=800" alt="image"
          className=" w-full h-[500px] "
          />
          <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center"> 
          <button className="  bg-white rounded-full p-2 text-xl capitalize">Smart Watch</button>
          </div>
       
        </div>
        <div className=" w-full relative"> 
          <img src="https://enterprise-theme-digital.myshopify.com/cdn/shop/files/NITRO_17_Intel_Lifestyle-High-01.jpg?v=1675184748&width=800" alt="image"
          className=" w-full h-[500px] "
          />
          <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center"> 
          <button className="  bg-white rounded-full p-2 text-xl capitalize">Accer</button>
          </div>
       
        </div>


      </div>
      
    </div>
  )
}
