import Address from '../model/Address.js'

export const Addaddress=async(req,res)=>{
     const{contactName,country,mobile,city,street,province,zipcode
           ,isdefault}=req.body;

     try{
      let address= await Address.findOne({user:req.user._id});
       if(!address){
         address=new Address({
            user:req.user._id,
            contactName,country,mobile,city,
            street,province,zipcode,isdefault
         });

         await address.save();
         res.status(200).json({address});
       }

     }catch(err){
      console.log(err);
     }
}
export const getAddresses=()=>{
   
  try{
    const addresses=Address.find({user:req.user._id,isdefault:true});
     if(!addresses) 
       return res.json({message:"No Address added yet !"})
      else
         res.status(200).json({addresses});

  }catch(err){
    console.log(err) ;
  }
}
