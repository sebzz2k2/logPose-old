import {Request, Response} from 'express'
import {comparePassword, generateToken, findUniqueUser,createNewUser} from './service'


export const login =async (req: Request,res:Response)=>{
    const { email, password} = req.body
    if( !email){
        return res.status(400).send({msg: 'Name or email is required'})
    }
    if(!password){
        return res.status(400).send({msg: 'Password is required'})
    }

    const user = await findUniqueUser(email)

    if(!user){
        return res.status(400).send({msg: 'User does not exist'})
    }

    const match = comparePassword(password, user.password)
    if(!match){
        return res.status(400).send({msg: 'Incorrect password'})
    }

    const token = generateToken(user)
    return res.status(200).send({
        name: user.name,
        email: user.email,
        token
    })


}
export const register =async (req:Request,res:Response)=>{
    const {name, email, password} = req.body
    if(!name){
        return res.status(400).send({msg: 'Name is required'})
    }
    if(!email){
        return res.status(400).send({msg: 'Email is required'})
    }
    if(!password){
        return res.status(400).send({msg: 'Password is required'})
    }
    const user = await findUniqueUser(email)
    if(user){
        return res.status(400).send({msg: 'Email already exists'})
    }

const newUser = await createNewUser(name, email, password)
    const token = generateToken(newUser)
    return res.status(200).send({
        name: newUser.name,
        email: newUser.email,
        token
    })
}
