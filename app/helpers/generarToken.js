const jwt = require('jsonwebtoken')
const { token } = require('morgan')

const generaJWT = (usuario)=>{
    return new Promise((resolve,reject)=>{
        const payload= {usuario}
        jwt.sign(payload,process.env.SECRETKEY,{
            expiresIn:'2h'
        },(err,token)=>{
            if(err){
                console.log(err)
                reject("No fue posible generar el token")
            } else {
                resolve(token)
            }
        })
    })
}

module.exports ={
    generaJWT
}