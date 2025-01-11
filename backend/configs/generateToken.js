import jwt from 'jsonwebtoken'
  const generateToken=(id,expiration=30)=>{
    return jwt.sign({id},process.env.TOKEN_SCRT,{
      expiresIn:`${expiration}d`
    }) ;
  }

  export default generateToken ;



