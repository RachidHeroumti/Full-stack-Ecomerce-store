import PaymentCard from "../model/PaymentCard.js";

export const AddPaymentCardInfo  = async(req,res)=>{
    const{cardNumber,DtCard,cvv}=req.body ;

     if(!cardNumber||!DtCard||!cvv)
         return res.json({message :"some information empty !"}) ;
    try{

      const cardPayment= new PaymentCard({
          user:req.user._id,
          cardNumber, DtCard, cvv
       })
  await cardPayment.save();
   res.status(200).json({message :"Payment card information added successfuly"});

    }catch(err){
      console.log(err);
    }
}

export const getPaymentCardInfo = async (req,res)=>{
    try{
      const paymentcardInfpo = await PaymentCard.find({user :req.user._id});
              if(paymentcardInfpo) {
                res.json({message :"Payment card informatin geted "});
              } 

    }catch(err){
      console.log(err);
    }
      
}