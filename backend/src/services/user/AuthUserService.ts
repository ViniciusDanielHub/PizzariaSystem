import { compare } from 'bcryptjs';
import { prismaClient } from '../../prisma/client'
import {sign} from 'jsonwebtoken'

interface IAuthRequest {
  email:string;
  password:string;
}

export class AuthUserService{
  async execute({email, password}: IAuthRequest){
    //verificar se o email já existe
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(!user){
      throw new Error('User/password incorrect')
    }

    //verificar se a senha está correta
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('User/password incorrect')
    }

    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name:user.name,
      email: user.email,
      token: token
    }
  }
}