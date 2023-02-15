import {prismaClient} from '../../prisma/client'
import { hash } from 'bcryptjs'

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService{
  async execute({name, email, password}: ICreateUser) {
    //verificar se ele enviou o email

    if(!email){
      throw new Error('Email Incorrect')
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email:email
      }
    })

    if(userAlreadyExists){
      throw new Error('User already exists')
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })

    return user;
  }
}