import { prismaClient } from '../../prisma/client'

interface IProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class CreateProductService{
  async execute({name, price, description, banner, category_id}: IProductRequest) {
   
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id
      }
    })

   return product;
  }
}