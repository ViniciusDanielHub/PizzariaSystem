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
   return {ok: true}
  }
}