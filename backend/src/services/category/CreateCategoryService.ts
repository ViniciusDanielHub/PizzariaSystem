import { prismaClient } from '../../prisma/client'

interface ICategoryRequest{
  name: string;
}

export class CreateCategoryService{
  async execute({name}: ICategoryRequest){
    
    if(name === ''){
      throw new Error('Name invalid')
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name:true,
      }
    })

    return category;
  }
}