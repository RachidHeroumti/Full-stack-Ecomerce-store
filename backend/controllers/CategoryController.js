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



// was for add some categories fast!
/**
 * 
 export const AddlistOfCategories=async(req,res)=>{
  try{
    const categories=await Category.insertMany([
      {
        "name": "Electronics",
        "image": "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Discover the latest gadgets and technology."
      },
      {
        "name": "Clothing",
        "image": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Find stylish apparel for all occasions."
      },
      {
        "name": "Home & Garden",
        "image": "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Enhance your living space with beautiful furniture and décor."
      },
      {
        "name": "Sports & Outdoors",
        "image": "https://images.pexels.com/photos/7055763/pexels-photo-7055763.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Gear up for your next adventure with top-quality sports equipment."
      },
      {
        "name": "Beauty & Health",
        "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Pamper yourself with luxurious beauty products and wellness essentials."
      },
      {
        "name": "Toys & Games",
        "image": "https://images.pexels.com/photos/1620675/pexels-photo-1620675.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Discover fun and educational toys for all ages."
      },
      {
        "name": "Books & Stationery",
        "image": "https://images.pexels.com/photos/12940778/pexels-photo-12940778.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Immerse yourself in a world of stories and find the perfect writing tools."
      },
      {
        "name": "Baby & Kids",
        "image": "https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Find everything you need for your little ones, from clothing to toys."
      },
      {
        "name": "Jewelry & Accessories",
        "image": "https://images.pexels.com/photos/8886968/pexels-photo-8886968.jpeg?auto=compress&cs=tinysrgb&w=300",
        "description": "Express your personal style with beautiful jewelry and accessories."
      }
    
    
    
    ]).then((res)=>{
      console.log(res);
    }).catch((e)=>{
      console.log(e)
    })

    res.json({categories});

  }catch(err){console.log(err)}
}
 */
