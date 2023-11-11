import Category from '../model/Category.js'

//
export const createCategory=async(req,res)=>{
  const {name}=req.body;
  
  try{
    let caregory= await Category.findOne({name});
     if(!caregory){
      caregory=new Category({name})
      await caregory.save();
       res.status(200).json({caregory})
     }else{
      return res.json({message:"Category already existe !"});
     }
  }catch(err){
    console.log(err) ;
  }
}
//
export const getCategories=async(req,res)=>{
  
   try{
 const categories =await Category.find();
  if(!categories) return res.json({message :"there is no categories yet !"});
    res.json({categories});

  }catch(err){
    console.log(err) ;
  }
}
//
export const getCategory=async(req,res)=>{
   const id=req.params.id;
     try{
 const category =await Category.findOne({id});
  if(!category) return res.json({message :"there is no categorie with this id!"});
    res.json({category});

  }catch(err){
    console.log(err) ;
  }

}
//
export const updateCategory=async(req,res)=>{
  
}
//
export const deleteCategory=async(req,res)=>{
  
}