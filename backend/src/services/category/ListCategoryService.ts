import { prismaClient } from '../../prisma/client'

export class ListCategoryService {
  async execute() {

    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      }
    })

    return category;
  }
}