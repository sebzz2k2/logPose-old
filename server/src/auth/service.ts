import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'secret'
const saltRounds = 10;

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

export const comparePassword = async (password: string, hash: string) => {
    const match = await bcrypt.compare(password, hash)
    return match
}

export const generateToken = (user: User) => {
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1d' })
    return token
}
export const findUniqueUser = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return user
    } catch (error) {
        throw new Error(`Error finding user: ${error}`)
    }
}

export const createNewUser = async (name: string, email: string, password: string) => {
    try {

        const allUser = await prisma.user.findMany()
        console.log(allUser)
        const hashedPassword = await hashPassword(password)
        const date = new Date()
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                updatedAt: date,
            }
        })
        return newUser
    } catch (error) {
        throw new Error(`Error creating user: ${error}`)
    }
}
