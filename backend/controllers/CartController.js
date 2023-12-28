import Cart from '../model/Cart.js'

export  const CreateOrAddTocart=async(req,res)=>{
   const {product,quantity}=req.body;
   
    
  try{
        
        let cart= await Cart.findOne({user:req.user._id});
          if(cart){
    //if card already exist add product to this cart  
        const pr=cart.products.find((i)=>i.product==product) ;
         
          if(!pr){
            try{
          const addedPr=  await Cart.findOneAndUpdate({user:req.user._id},{
               $push: {
        products: {
           product: product,
           quantity: quantity } }
            }) ;

    res.status(200).json({addedPr});
          }catch(err){
            console.log(err) ;
          }
          }else{
            //change quntity ;
            //  await Cart.findOneAndUpdate({
            //   "$set": {
            //     "products.quantity":quantity
            //   }
            // })
            res.json({msg:"change quantity"})
          }
          }else{
    //create card  then add product to cart
      cart=new Cart({user:req.user._id ,products:[{product,quantity}]});
          await cart.save();

          res.status(200).json({cart}) ;
          }
       


  }catch(err){
    console.log(err) ;
  }
}

export const deleteFromCart=async(req,res)=>{

}

export const getItemsInCart=async(req,res)=>{

   try{
const productsInCart = await Cart.find({ user: req.user._id })
     .populate('products.product')
    // .lean();

   res.status(200).json(productsInCart);

   }catch(err){
    console.log(err);
   }

}
  