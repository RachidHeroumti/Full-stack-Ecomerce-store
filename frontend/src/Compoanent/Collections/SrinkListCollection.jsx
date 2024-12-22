import React from "react";

function SrinkListCollection() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* Large item */}
      <div className="relative col-span-2 row-span-2">
        <div className="absolute top-4 left-4 bg-pink-800 text-white text-sm font-bold px-3 py-1 rounded-full">
          New in
        </div>
        <img
          src="https://enterprise-theme-digital.myshopify.com/cdn/shop/products/Ignite2-Beauty-black_2_Lo_EDIT_C.jpg?v=1676026193&width=8004"
          alt="Smartwatch"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Top right items */}
      <div className="relative col-span-1 flex flex-col items-center text-center">
        <div className="absolute top-4 left-4 bg-pink-800 text-white text-sm font-bold px-3 py-1 rounded-full">
          Save up to 25%
        </div>
        <img
          src="https://enterprise-theme-digital.myshopify.com/cdn/shop/files/acer-aspire-3-14-4_EDIT_E.jpg?v=1675173360&width=480"
          alt="Laptop"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h3 className="mt-4 text-lg font-bold">Replace the essentials</h3>
        <a
          href="/"
          className="text-blue-500 text-sm font-medium mt-1 hover:underline"
        >
          Shop Computing &gt;
        </a>
      </div>

      <div className="relative col-span-1 flex flex-col items-center text-center">
        <div className="absolute top-4 left-4 bg-pink-800 text-white text-sm font-bold px-3 py-1 rounded-full">
          Save up to 1/3
        </div>
        <img
          src="https://enterprise-theme-digital.myshopify.com/cdn/shop/files/dsp3200-loudspeaker-on-stand-EDIT_A.jpg?v=1675173959&width=480"
          alt="Loudspeaker"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h3 className="mt-4 text-lg font-bold">Treat yourself...</h3>
        <a
          href="/"
          className="text-blue-500 text-sm font-medium mt-1 hover:underline"
        >
          Shop loudspeakers &gt;
        </a>
      </div>

      {/* Bottom wide item */}
      <div className="relative col-span-2">
        <div className="absolute top-4 left-4 bg-pink-800 text-white text-sm font-bold px-3 py-1 rounded-full">
          Save up to 33%
        </div>
        <img
          src="https://enterprise-theme-digital.myshopify.com/cdn/shop/files/W150_Resort_Hero_shot_SML_EDIT_B.jpg?v=1675175481&width=800"
          alt="Camera"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default SrinkListCollection;
