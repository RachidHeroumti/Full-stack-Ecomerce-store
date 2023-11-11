import Product from '../model/Product.js'

//
export const CreateProduct =async(req,res)=>{
  const{title,description,price,image,category,images}=req.body ;

  if(!title||!description||!price||!image||!category||!images){
   return res.json({message : "Please Enter all informations !"})
 
  }else{ 
    let pr;
       try{
         pr=await Product.find({description});
        //  if(pr){
        //   return res.status(401).json({message :"there is already an product with same description !"})
        //  }

       pr=new Product({title,description,price,image,category,images,seller:req.user._id});
        await pr.save();
         res.status(200).json({pr}) ;
    }catch(err){
      console.log(err) ;
    }
  }
}

//
export const getProduct =async(req,res)=>{
  const id=req.params.id;
   
  try{
    const product=await Product.findOne({_id:id}) ;
     if(!product) return res.json({message :"Product not existe !"});

     res.status(200).json({product});

  }catch(err){
      console.log(err) ;
    }
}

//
export const getProducts =async(req,res)=>{
   try{
    const products=await Product.find() ;
     if(!products) return res.json({message :"no product yet!"});
     res.status(200).json({products});

  }catch(err){
      console.log(err) ;
    }
}
//
export const getProductWhere =async(req,res)=>{

}
//
export const updateProduct =async(req,res)=>{

}