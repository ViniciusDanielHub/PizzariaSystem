import { prismaClient } from '../../prisma/client'

export class DetailUserService{
  async execute(){
    return { ok:true }
  }
}